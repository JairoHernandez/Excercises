// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    // console.log(n.toString().split('')); // [ '-', '1', '5' ]
    const reversed = n.toString().split('').reverse().join(''); // 51-
    
    // SOLUTION 1
    // if (n < 0) {
    //     return parseInt(reversed) * -1;
    // }
    // return parseInt(reversed);

    // *SOLUTION 2
    return parseInt(reversed) * Math.sign(n); 

}

console.log(reverseInt(-15));
module.exports = reverseInt;
