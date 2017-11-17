// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 4
function reverse(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

// console.log(reverse('jairo')); // oriaj
module.exports = reverse;

// SOULUTION 1
// function reverse(str) {
//     // Array.prototype.array.reverse() only works on an array so you have to convert string to array.
//     // Convert string to array, reverse it, and convert back to string.

//     // const arr = str.split('');
//     // // console.log(arr); // [ 'j', 'a', 'i', 'r', 'o' ]
//     // arr.reverse();
//     // // console.log(arr); // [ 'o', 'r', 'i', 'a', 'j' ]
//     // return arr.join('');
//     // Equivalent
//     return str.split('').reverse().join('');
// }

// SOLUTION 2
// function reverse(str) {
//     let reversed = '';

//     // new ES6 for of syntaX
//     for (let character of str) {
//         reversed = character + reversed;
//         console.log(reversed);
//     }
//     return reversed;
// }

// SOLUTION 3
// function reverse(str) {
//     let reversed = '';

//     for (var x=0; x < str.length; x++) {
//         reversed = str[x] + reversed;
//     }
//     return reversed;
// }