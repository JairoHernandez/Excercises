// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) { // Breadth First
    const arr = [root, 'placeholder'];
    const counters = [0];

    while (arr.length > 1) {
        const node = arr.shift(); // Remove 1st element and assing to node.

        if (node === 'placeholder') {
            counters.push(0);
            arr.push('placeholder'); // Add placeholder to end of arr.
        } else {
            // Adds nodes to array, which forces while loop to run for each elment node.
            arr.push(...node.children); 
            counters[counters.length - 1]++;
        }
    }

    return counters;
}

module.exports = levelWidth;
