// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        // if something is in 1st stack it moves it over to 2nd stack.
        while (this.first.peek()) {  
            this.second.push(this.first.pop());
        }

        const record = this.second.pop(); // save reference to the record we want

        // move remaining records back to 2nd stack and place them back in original order
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while(this.first.peek()) {
            // console.log('peek --', this.first.peek());
            this.second.push(this.first.pop());
        }
        console.log('2nd stack:', queue.second.data); //2nd stack: []

        const record = this.second.peek();

        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }
}

var queue = new Queue();
queue.add('green'); queue.add('blue'); queue.add('red'); 
console.log('1st stack:', queue.first.data); // 1st stack: [ 'red', 'blue', 'green' ]
console.log('1st stack peek:', queue.first.peek()); // green

console.log('2nd stack peek:', queue.peek()); //2nd stack: []


module.exports = Queue; 
