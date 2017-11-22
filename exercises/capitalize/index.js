// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) { // 'hi there buddy' --> ["hi","there","buddy"]
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    console.log(words); // [ 'Hola', 'Hombre', 'Viejo' ]
    return words.join(' ');
}

console.log(capitalize('hola hombre viejo'));
module.exports = capitalize;
