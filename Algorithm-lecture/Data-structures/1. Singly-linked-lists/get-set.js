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

  set(idx, val) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}