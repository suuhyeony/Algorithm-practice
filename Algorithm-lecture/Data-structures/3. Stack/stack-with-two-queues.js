class Stack {
  constructor() {
    this.mainQueue = new Queue();
    this.subQueue = new Queue();
  }
  push(val) {
    this.mainQueue.enqueue(val);
    return this;
  }
  pop() {
    if (this.mainQueue.size === 0) return null;
    while (this.mainQueue.size > 1) {
      this.subQueue.enqueue(this.mainQueue.dequeue());
    }
    const result = this.mainQueue.dequeue();
    while (this.subQueue.size) {
      this.mainQueue.enqueue(this.subQueue.dequeue());
    }
    return result;
  }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
