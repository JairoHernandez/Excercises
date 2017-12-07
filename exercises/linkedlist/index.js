// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null) {
        // object properties
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // {"head":null}

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

    // Move head to second node to get rid of first node. First node no longer has reference so it's like a deletion.
    removeFirst() {
        if (!this.head) {
            return null;
        }

        this.head = this.head.next;
    }
    
    // Temp value 'previous' points to what head points to and temp value 'node' points to next node. 
    // Iterate till temp value node.next hits null to know we are at the end. Remove that node
    // and mark 'previous' node with null.
    removeLast() {
        if (!this.head) { // removes the last node when list is empty
            return; 
        }

        if (!this.head.next) { // if there's no second node.
            this.head = null;
            return;
        }

        // RemoveLast removes the last node when list is length 2 or more.
        let previous = this.head;
        let node = this.head.next;

        while (node.next) { // see lecture 84 to make sense
            previous= node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // theere are some existing nodes in our chain.
            last.next = new Node(data);
        } else {
            // The chain is empty so create a node.
            this.head = new Node(data);
        }
    }
}

const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne; 
console.log(list.head); // {"data":5,"next":null}
list.insertFirst(15);
list.insertFirst(25);
list.insertFirst(35);
console.log(list); // {"head":{"data":15,"next":{"data":5,"next":null}}}
console.log(list.size()); // 2

module.exports = { Node, LinkedList };
