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
        const arr = [this.root]; // stick root node into array
        while (arr.length) {
            const node = arr.shift(); // takes out 1st element

            // push(node.children) is not what we want since that would push in a whole 
            // array into an array and produce [node, [node, node, node]], which is NOT 
            // what we want since node.children is an array not the individual item we want.

            // for (let child of node.children) {
            //     arr.push(child);
            // }
            /** ES6 shortcut */
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) { // Depth First
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift(); // takes out 1st element
            
            arr.unshift(...node.children); // adds as the 1st element.
            fn(node);
        }
    }
}

module.exports = { Tree, Node };
