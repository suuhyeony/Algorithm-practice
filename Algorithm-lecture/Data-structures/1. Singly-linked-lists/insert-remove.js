class Node { 
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    // 두 변수 모두 맨 첫 노드부터 시작
    let current = this.head;
    let previous = current;
    // 리스트에 다음 노드가 있을 때까지 루프 돌기
    while (current.next) {
      // 이전 노드를 저장하고, 현재 노드를 다음 노드로 설정 (previous는 항상 current에 끌려감)
      previous = current;
      current = current.next;
    }
    // tail을 마지막에서 두번째 노드로 설정 후, tail 끊기
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter < idx) {
      current = current.next;
      counter++;
    }
    return current;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    let previous = this.get(idx - 1);
    let current = previous.next;
    previous.next = newNode;
    newNode.next = current;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let previous = this.get(idx - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }
}