class Node {
  constructor(val) {
    this.val = val;
    this.next = null;   
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
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

  rotate(idx) {
    const targetIdx = ((idx % this.length) + this.length) % this.length;
    if (targetIdx === 0) return;
    const nextSectionHead = this.head;
    const prevSectionTail = this.tail;
    const target = this.get(targetIdx - 1);
    this.head = target.next;
    this.tail = target;
    target.next = null;
    prevSectionTail.next = nextSectionHead;
  }
}