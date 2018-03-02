'use strict';
function reverse(str) {
    let reversed = '';

    return str.split('').reverse().join('');
}

console.log(reverse('jairo'));

/** if ... is passed as parameter comma values are placed into new array
 * if ... is pased as argument array is removed and passed in as individual comma values.
 */
function jairo(...args) {
    console.log(args);
    console.log(args[args.length - 1]);
}

jairo('1', '2', '3'); // [ '1', '2', '3' ] and 3
jairo(['1', '2', '3'], ['4', '5', '6']); // [ [ '1', '2', '3' ], [ '4', '5', '6' ] ] and [ '4', '5', '6' ]
console.log('------');

let array1 = [ 7 ];
let array2 = [ 8, 9, 10 ];
array1.push(...array2); //[ 7, 8, 9, 10 ]
// array1.push(array2); // [ 7, [ 8, 9, 10 ] ]
console.log(array1);
array1.shift(); // [ 8, 9, 10 ]
console.log(array1);
console.log('------');

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log(foo1());
console.log(foo2());

function *numbers() {
    const result = 1 + 1;
    return 20 + (yield result);
}

/** GENERATORS */

const generator1 = numbers() 
console.log('Generator1:', generator1); // Generator: {}
console.log('Generator1:', generator1.next()); // Generator: { value: 2, done: false }
// The portion (yield result) is now replaced with 10.
console.log('Generator1:', generator1.next(10)); // Generator: { value: 30, done: true }

function *list() {
    yield 1;
    yield 2;
    yield 3;
}

const generator2 = list();
console.log('Generator2:', generator2.next()); // { value: 1, done: false }
console.log('Generator2:', generator2.next()); // { value: 2, done: false }
console.log('Generator2:', generator2.next()); // { value: 3, done: false }
console.log('Generator2:', generator2.next()); // { value: undefined, done: true }

function *numbersAgain() {
    yield 1;
    yield 2;
    yield *moreNumbersAgain();
    yield 5;
}

function *moreNumbersAgain() {
    yield 3;
    yield 4;
}

const generator = numbersAgain();

const values = [];
for (let value of generator) {
    values.push(value);
}
console.log('values:', values);

/** RECURSION
 * 1. Identify base case to tell us when to stop recursion process.
 * 2. Change the argument passed into function to reach the base case.
 */
console.log('----RECURSION---')
function printNumber(n) {
    if (n === 0) { // Base case.
        return;
    }

    console.log(n);
    printNumber(n - 1); // Change the argument to reach base case.
}

printNumber(5);

console.log('----forEach---')
let arr = [1, 2, 3];
arr.forEach( function (element, index) {
    console.log(`index: ${index} = ${element} `);
});
console.log(arr); // [ 1, 2, 3 ]


console.log('++++++++++Move first numbers to back of array +++++++++++++')
let moveBack = howmany => {
    let data = [1, 2, 3, 4];
    let moveme = data.slice(0, howmany);
    let remainder = data.slice(2);
    remainder.push(...moveme);
    console.log(remainder.join(' '));
};

moveBack(2);

