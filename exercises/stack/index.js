// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {

    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record); // inserts are end or array(right-most).
    }

    pop() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

var stack = new Stack();
stack.push('jhern'); // bottom of stack.
stack.push('odie'); // the end(top of stack)
console.log(stack.peek()); // odie
console.log(stack.data); // [ 'jhern', 'odie' ]
console.log(stack.pop()); // Removes the last entry.
console.log(stack.data); // [ 'jhern' ]
module.exports = Stack;
