class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLL {
  constructor(val) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // Update the current tail's next pointer (in this both head and tail next point to the new node)
      this.tail = newNode; // Move the tail pointer to the new node (with this tail points to the new node)
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.val = value;
      return temp;
    }
    return undefined;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return undefined;

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return newNode;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    let before = this.get(index - 1);
    if (before) {
      let temp = before.next;
      before.next = temp.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      let next = temp.next; // Which is heal at the starting of the problem
      temp.next = prev;
      prev = temp; // For moving pointer position to the next elem
      temp = next; // For moving pointer position to the next elem
    }
    return this;
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  removeDuplicateFromSortedList() {
    let current = this.head;
    while (current.next) {
      if (current.val !== current.next.val) {
        current = current.next;
      } else {
        current.next = current.next.next;
        this.length--;
      }
    }
    return this;
  }
  removeDuplicateFromUnSortedList() {
    let prev = null;
    let current = this.head;
    const uniqueValue = new Set();

    while (current !==null) {
      if (uniqueValue.has(current.val)) {
        prev.next = current.next;
        this.length--;
      } else {
        uniqueValue.add(current.val);
        prev = current;
      }
      current = current.next
    }
    this.tail = prev;
    return this
  }
  printList() {
    let currentNode = this.head;
    let output = "";
    while (currentNode) {
      output += `Node(val: ${currentNode.val}) -> `;
      currentNode = currentNode.next;
    }
    output += "null";
    console.log(output);
  }
}

const first = new SingleLL(20);

/*head -> Node(20) -> null
tail -> Node(20) -> null

When you push a new node with value 25:

Create a new node with value 25.

const newNode = new Node(25);
This creates:

plaintext
Copy code
Node(25) -> null
Link the current tail's next to the new node:

this.tail.next = newNode;
At this point, both this.head and this.tail still refer to the same node (the node with value 20). Since the tail.next is updated to point to newNode, the next of the head also gets updated because head and tail point to the same node.

Now your list looks like this:

head -> Node(20) -> Node(25) -> null
tail -> Node(20) -> Node(25) -> null

Move the tail to the new node:

this.tail = newNode;
After this line, tail is updated to point to the new node (25), and the list now looks like:


head -> Node(20) -> Node(25) -> null
tail -> Node(25) -> null */

// first.push(25);
// first.push(10);
// console.log(first.pop());
// first.unshift(90)
// console.log(first)
// console.log(first.shift())
// console.log(first.get(1));
// console.log(first.set(1, 78));
// console.log(first);

/*Problem number 1: Find the middle node of given linkedlist;*/
/*const singleLL = new SingleLL(10);
singleLL.push(20);
singleLL.push(30);
singleLL.push(40);
singleLL.push(50);
singleLL.push(60);
singleLL.push(70);
singleLL.push(80);
console.log(singleLL.findMiddle())*/

// Problem number 2: Remove the duplicate node from sorted linked list

const list = new SingleLL(1);
list.push(1);
list.push(2);
list.push(3);
list.push(3);
list.push(4);
list.push(3);
list.push(9);
list.push(1);
// let result = list.removeDuplicateFromSortedList();
result = list.removeDuplicateFromUnSortedList()
result.printList();
