// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const charMap = {};
    let max = 0;
    let maxChar = '';

    // Build object.
    for (let char of str) {

        if (charMap[char]) { // if value exists increment it.
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    console.log(charMap); // { H: 1, e: 3, l: 2, o: 1, ' ': 1, t: 1, h: 1, r: 1, '!': 1 }

    // Iterate an object by using 'let char in'
    for (let char in charMap) { // char is the key.
        console.log(char); // H
                           // e
                           // l
                           // o
        if (charMap[char] > max) {
            max = charMap[char]; // keep track of max count of the character
            maxChar = char; // maxChar is now that character.
        }
    }
    console.log(maxChar);
    return maxChar;
}

maxChar('Hello there!');
module.exports = maxChar;
