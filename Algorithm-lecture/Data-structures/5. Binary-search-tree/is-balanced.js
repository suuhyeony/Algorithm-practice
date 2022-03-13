class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }
  insert(value) {
    if (typeof value !== 'number' && isNaN(value)) return "Please insert a number";
    if (this.root === null ) {
      this.root = new Node(value);
      this.length++;
      return this;
    } 
    var current = this.root;
    while (true) {
      if (value === current.value) return "duplicated!";
      if (value < current.value) {
        if (current.left === null ) {
          current.left = new Node(value);
          this.length++;
          return this;
        }
        current = current.left;
      } 
      else {
        if (current.right === null ) {
          current.right = new Node(value);
          this.length++;
          return this;
        }
        current = current.right;
      }
    }
  }

  isBalanced() {
    if (this.root === null) return "please insert a node";
    if (this.length < 3) return true;
    let leftNode = this.root;
    let rightNode = this.root;
    while (leftNode.left || rightNode.right) {
      if (leftNode.left) {
        if (leftNode.left && !leftNode.right) return false;
        leftNode = leftNode.left;
      }
      if (rightNode.right) {
        if (!rightNode.left && rightNode.right) return false;
        rightNode = rightNode.right;
      }
    }
    return true;
  } 
}