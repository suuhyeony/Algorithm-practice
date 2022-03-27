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
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } 
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } 
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  // 미완성..
  remove(value) {
    if (this.root === null) return null;
    let current = this.root;
    while (true) {
      if (value === current.value) {
        current = null;
        return value;
      }
      if (value < current.value) {
        if (current.left === null) return null;
        if (current.left.value === value) {
          const target = current.left;
          if (target.left && !target.right) {
            current.left = target;
          } else if (!target.left && target.right) {
            current.left = null;
          } else {
            
          }
          return value;
        }
        current = current.left;
      } else {
        if (current.right === null) return null;
        if (current.right.value === value) {
          const target = current.right;
          if (target.right) {
            current.right = target;
          } else {
            current.right = null;
          }
          return value;
        }
        current = current.right;
      }
    }
  }
}
