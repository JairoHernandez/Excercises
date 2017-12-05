// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);  // this.head becomes new node.
    }

    size() { // Returns the number of nodes in the linked list.

    }
}

const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne; // {"data":5,"next":null}
console.log(list.head);
list.insertFirst(15);
console.log(list); // {"head":{"data":15,"next":{"data":5,"next":null}}}
for (let node in list.head) {
    console.log('node:', node);
}


module.exports = { Node, LinkedList };
