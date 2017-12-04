// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor()   {
      this.data = [];
  }

  add(record) {
      this.data.unshift(record); // unshift inserts at front(left side) of the array first.
  }

  remove() {
      return this.data.pop();
  }
}

queue = new Queue();
queue.add(22);
queue.add(33);
console.log(queue.data); // [ 33, 22 ]
console.log(queue.remove()); // 22
console.log(queue.data); // [ 33 ]
module.exports = Queue;
