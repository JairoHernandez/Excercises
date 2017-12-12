// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    // Given some data, create a new node and add it to the current node's 'children' array.
    add(data) {
        this.children.push(new Node(data));
    }

    // Given some data, look at each child of the current node and reomve any node with data === data.
    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

// Unlike a list for a tree you have to be specific of what node you want to add data to.
class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) { // Breadth First.

    }
}

module.exports = { Tree, Node };
