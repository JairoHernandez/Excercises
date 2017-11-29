// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// SOLUTION2(EASY REGEX)
// function vowels(str) {
//     // Returns an array of matched characters or null if none found.
//     const matches = str.match(/[aeiou]/gi); // g means 'dont stop at first match, but keep going', i means case-insensitive.
//     console.log('matches:', matches); // [ 'a', 'i', 'i', 'o' ]
//     return matches ? matches.length : 0;
// }
// console.log(vowels('jaiiro'));

// *SOLUTION 1 (SAFER SOLUTION)
function vowels(str) {
    let count = 0;
    const vowelcheck = [ 'a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (vowelcheck.includes(char)) {
            count++;
        }
    }
    // console.log(count);
    return count;
}
console.log(vowels('jairo'));

module.exports = vowels;
