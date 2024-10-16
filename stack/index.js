class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(val) {
    const newNode = new Node(val);
    this.top = newNode;
    this.length = 1;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    else {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }
}

let stack = new Stack(1);
stack.push(2);
stack.push(3);
// console.log(stack);

// Question no-1 : Reverse a string;

function reverseString(ipt) {
  const stack = new Stack();
  let reversedString = "";
  for (let char of ipt) {
    stack.push(char);
  }
  while (stack.length - 1 !== 0) {
    reversedString += stack.pop().val;
  }
  return reversedString;
}

// console.log(reverseString("hello shiv"));

function isBalancedPar(str) {
  const stack = [];
  const ob = ["(", "[", "{"];
  const cb = [")", "]", "}"];

  for (let char of str) {
    if (ob.includes(char)) {
      stack.push(char);
    } else if (cb.includes(char)) {
      const lastOpenBracket = stack.pop();
      const matchingOpenBrac = ob[cb.indexOf(char)];

      if (lastOpenBracket !== matchingOpenBrac) {
        return false;
      }
    }
  }
  return stack.length === 0;
}


console.log(isBalancedPar('([])'))


function sortStack(stack){
  const tempStack = new Stack();
  while(stack.length!==0){
    const current = stack.pop();
    while(tempStack.length!==0 && tempStack.top.val > current.val){
      stack.push(tempStack.pop().val)
    }
    tempStack.push(current.val);
  }
  while(tempStack.length!==0){
    stack.push(tempStack.pop().val)
  }
  return stack;
}

