class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(val) {
    const newNode = new Node(val);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    else {
      let temp = this.first;
      this.first = this.first.next;
      temp.next = null;
      this.length--;
      return this;
    }
  }
}

let queue = new Queue(10);
