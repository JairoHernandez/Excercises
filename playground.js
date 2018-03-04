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

console.log('+++++++++++++++++++++++++++++++++');

var a = 'fcrxzwscanmligyxyvym';
var b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';

var aclean = a.split('').sort().join('').trim();
var bclean = b.split('').sort().join('').trim();

var acleanArr = aclean.split('');
var bcleanArr = bclean.split('');
var count = 0;

for (let index=0; index < bclean.length; index++) {
    
    if (acleanArr.indexOf(bcleanArr[index]) === -1) {
        // console.log(bcleanArr[index] + ' not in acleanArr');
        count += 1;
    }
}

for (let index=0; index < aclean.length; index++) {

    if (bcleanArr.indexOf(acleanArr[index]) === -1) {
        // console.log(acleanArr[index] + ' not in bcleanArr');
        count += 1;
    }
}

console.log(count);

console.log('+++++++++++++++++++++++++++++++++');
let obj = { name1: 'jairo', name2: 'odie', name3: 'rose'};
let objcount = 0;
for (let key in obj) {
    objcount += 1;
}
console.log('obj count: ', objcount);

console.log('+++++++++++++++++++++++++++++++++');

function findNumber(arr, k) {
    
    let reply = 'NO';

    for (let element in arr) {
        
        if (element === k);
            reply = 'YES';
    }

    return reply;

}

arr = [1,2,3];
console.log(findNumber(arr, 4));
