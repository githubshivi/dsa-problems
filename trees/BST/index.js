class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.val === temp.val) return undefined;
      if (newNode.val < temp.val) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (val < temp.val) {
        temp = temp.left;
      } else if (val > temp.val) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  bfs() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      if (!currentNode) return;
      results.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  dfsPreOrder() {
    let results = [];
    function traverse(currentNode) {
      results.push(currentNode.val);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }

  dfsPostOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.val);
    }
    traverse(this.root);
    return results;
  }

  dfsInOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.val);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
}

const fisrt = new BST();
fisrt.insert(40);
fisrt.insert(30);
fisrt.insert(50);
fisrt.insert(25);
fisrt.insert(35);
fisrt.insert(45);
fisrt.insert(55);
// console.log(fisrt.root.left.right)
// console.log(fisrt.find(50))
// console.log(fisrt.bfs());
console.log(fisrt.dfsPreOrder())
