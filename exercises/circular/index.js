// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {

// slow and fast start at 0.
// slow increments by 1 and fast by 2.
// If slow catches up to fast and they are now the same value then this is a circular list.

    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        // You do not want to compare the data like slow.data === fast.data since all nodes could hold identical data 
        // so instead we point to the memory reference slow === fast.
        if (slow === fast) { 
            return true;
        }
    }
    return false; // if loops exits it means we do NOT have a circular list so return FALSE.
}

module.exports = circular;
