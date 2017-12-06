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
        this.head = new Node(data, this.head);  // data becomes new node, this.head is old node pushed to right.
    }

    size() { // Returns the number of nodes in the linked list.
        let counter = 0;
        let node = this.head;

        while (node) { // iterate thru linked list
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) { // If there is no head element no nodes exist.
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    // linked list only know nodes exist through head property so zero it out to clear the list.
    clear() {
        this.head = null; // We now have no reference to list of nodes who cares if it's floating in memory.
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        this.head = this.head.next;
    }
    // Move head to second node to get rid of first node. First node no longer has reference so it's like a deletion.
}

const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne; 
console.log(list.head); // {"data":5,"next":null}
list.insertFirst(15);
list.insertFirst(25);
list.insertFirst(35);
console.log(list); // {"head":{"data":15,"next":{"data":5,"next":null}}}
for (let node in list.head) {
    console.log('node:', node);
}
console.log(list.size()); // 2

module.exports = { Node, LinkedList };
