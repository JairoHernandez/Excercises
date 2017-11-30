// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

queue = new Queue();
queue.add(22);
queue.add(33);
console.log(queue.data); // [ 33, 22 ]
console.log('peek: ' + queue.peek()); // peek: 22
console.log('remove: ' + queue.remove()); // 22
console.log(queue.data); // [ 33 ]
module.exports = Queue;
