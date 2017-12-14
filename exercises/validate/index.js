// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const util = require('util')

function validate(node, min = null, max = null) {
    // Left hand check, node.data is current parent-node.
    // console.log(`node: ${node}, min: ${min}, max: ${max}`)
    // console.log(util.inspect(node, false, null))
    if (max !== null && node.data > max) {
        return false;
    }

    // Right hand check, node.data is current parent-node.
    if (min !== null && node.data < min) {
        return false;
    }

    // Calling validate is what causes recursion.
    // First-time min is still null and the parent-node is node.data.
    // node.left|right is the child-node of current parent-node
    if (node.left && !validate(node.left, min, node.data)) { 
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}
module.exports = validate;
