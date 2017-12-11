// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {}

// temp holders callled 'slow' and 'fast.
// initialize both 'slow' and 'fast' to point to both nodes.
// slow is incremented by 1 while slow is incremente by 2 elements.
// Does the 'fast' node have 2 nodes after it? If yes, advance both pointers by 1. If not, we are at end of list.
// This ends up being the middle because 'fast' is moving twice as fast vs. 'slow'
module.exports = midpoint;
