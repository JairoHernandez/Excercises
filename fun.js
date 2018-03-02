
class Node {
 constructor(data, next = null) {
     this.data = data;
     this.next = next;
 }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        this.head = new Node(data, this.head); // this.head in new Node() moves to the right.
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        let nodedata = this.head.data;
        let nodenext = this.head.next;
        return { nodedata, nodenext };
    }
}

let node1 = new Node('jairo');
console.log(node1);

let linkedList1 = new LinkedList();
linkedList1.insert('odie');
linkedList1.insert('rose');
linkedList1.insert('diego');
console.log('head -- ', linkedList1.head);
console.log('size -- ', linkedList1.size());
console.log('getFirst -- ', linkedList1.getFirst());


