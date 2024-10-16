class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor(val) {
    const node = new Node(val);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let currentNode = this.head;
    const listValues = [];
    while (currentNode) {
      listValues.push({
        val: currentNode.val,
        prev: currentNode.prev ? currentNode.prev.val : null,
        next: currentNode.next ? currentNode.next.val : null,
      });
      currentNode = currentNode.next;
    }
    console.log(listValues);
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      temp.next = null;
      this.head.prev = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    index = index - 1;
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    } else {
      throw new Error("Index out of bond");
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) throw new Error("Index out of bound");
    if (index === 0) {
      this.unshift(val);
      return this;
    }
    if (index === this.length) {
      this.push(val);
      return this;
    }

    let node = this.get(index);
    let newNode = new Node(val);

    newNode.prev = node.prev;
    newNode.next = node;

    if (node.prev) {
      // Check to avoid null reference error
      node.prev.next = newNode;
    }
    node.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length)
      throw new Error("Index out of bound");
    if (index === 0) {
      this.shift();
      return this;
    }
    if (index === this.length - 1) {
      this.pop();
      return this;
    }

    let foundNode = this.get(index);
    let before = foundNode.prev;
    let after = foundNode.next;
    // Update links to remove the node
    if (before) before.next = after;
    if (after) after.prev = before;

    foundNode.prev = null;
    foundNode.next = null;
    this.length--;
    return this;
  }

  swapFirstAndLastValue() {
    let temp = this.head.val;
    this.head.val = this.tail.val;
    this.tail.val = temp;
    return this;
  }

  reverse() {
    let current = this.head;
    let temp = null;
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
  }

  isCycleFormed() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  isPalindrom() {
    let forward = this.head;
    let backward = this.tail;

    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      if (forward.val !== backward.val) return false;
      forward = forward.next;
      backward = backward.prev;
    }
    return true;
  }
}

let first = new DoubleLinkedList(1);
first.push(2);
first.push(3);
first.push(4);
first.push(5);
first.push(6);
// first.insert(4, 100);
// first.pop();
// first.unshift(90);
// first.printList();
// console.log(first.get(6))
// first.set(12,90)

// Question no-1: Swap the value of first and last node of doubleLL
let swappedList = first.swapFirstAndLastValue();
swappedList.printList();

//Question no-2: Reverse a list

let reverseList = first.reverse();
console.log(reverseList.head);
reverseList.printList();

// Question no-3: Detect a cycle
