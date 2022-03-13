class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (typeof value !== 'number' && isNaN(value)) return "Please insert a number";
    if (this.root === null ) {
      this.root = new Node(value);
      return this;
    } 
    var current = this.root;
    while (true) {
      if (value === current.value) return "duplicated!";
      if (value < current.value) {
        if (current.left === null ) {
          current.left = new Node(value);
          return this;
        }
        current = current.left;
      } 
      else {
        if (current.right === null ) {
          current.right = new Node(value);
          return this;
        }
        current = current.right;
      }
    }
  }

  findSecondLargest() {
    if (this.root === null) return undefined;
    let current = this.root;
    let temp = current;
    while (current.right) {
      temp = current.value;
      current = current.right;
    }
    return temp;
  } 
}