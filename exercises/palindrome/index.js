// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // SOLUTION 1
    // reversed = str.split('').reverse().join('');
    // return str === reversed;

    // SOLUTION 2
    // reversed = '';
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return str === reversed;

    // SOLUTION 3
    // reversed = '';
    // for (x=0; x < str.length; x++) {
    //     reversed = str[x] + reversed;
    // }
    // return str === reversed;

    // SOLUTION 4 (where i is the 1st element in the array. 
    // After every call i moves on to next element.
    return str.split('').every((char, i) => {
        return char === str[str.length - i -1];
    });

    
}

console.log(palindrome('11xx121'));
module.exports = palindrome;
