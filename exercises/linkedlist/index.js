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
        // head is just a property that points to to the next node or null if initializing list for the first time.
        this.head = null; // {"head":null}. Also another way of removing entire list.

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
        // return this.head;
        return this.getAt(0); // refactor
    }

    getLast() {
        // if (!this.head) { // If there is no head element no nodes exist.
        //     return null;
        // }

        // let node = this.head;
        // while (node) {
        //     if (!node.next) {
        //         return node;
        //     }
        //     node = node.next;
        // }
        return this.getAt(this.size() - 1); // refactor!!
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
    
    // 2 Pointers:  Temp value 'previous' points to what head points to and temp value 'node' points to next node. 
    // Iterate till temp value node.next hits null to know we are at the end. Remove that node
    // and mark 'previous' node with null.
    removeLast() {
        if (!this.head) { // Check if list empty.
            return; 
        }

        if (!this.head.next) { // if there's no second node.
            this.head = null; // This removes head.
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

    getAt(index) {
        let counter = 0;
        let node = this.head;   
        while (node) { 
            if (counter === index) { // readhed end to index.
                return node;
            }

            counter++;
            node = node.next;
        }
        return null; // if no such index exists
    }

    // Idea is to redo the link by skipping over the node you want to remove. 
    // If it lives in memory who cares.
    // Use 'previous' pointer pointing to node right before the desired node to delete.
    // Then have 'next' point to next node.
    removeAt(index) {
        if (!this.head) { // Check if list empty.
            return;
        }

        // Removes first node and moves head to second node.
        if (index === 0 ) { 
            this.head = this.head.next;
            return;
        }

        // Will be used to update the 'next' node to now point to the node after the one that is going to be deleted.
        const previous = this.getAt(index - 1); 
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next; // leapfrogs the node in the middle that will be deleted.
    }

    insertAt(data, index) {
        if (!this.head) { // Check if list empty. If it is insert a new node with data at index 0.
            this. head = new Node(data);
            return;
        }    

        if (index === 0) { // insert new node at front.
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast(); // getLast() is special scenario where index is too high so node will need to be placed at end of list.
        const node = new Node(data, previous.next); // makes new node and connects it to node 'previous.next that shifted to the right.
        previous.next = node; // Move arrow to point to the new node.
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while(node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
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
