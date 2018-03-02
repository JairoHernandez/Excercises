var a = '1 2 3 4 5';
var n_temp = a.split(' ').map(element => parseInt(element));
var n = n_temp[0];
var k = n_temp[1];

var a = readLine().split(' ').map(element => parseInt(element));
var firstslice = a.slice(0, a.length-1); # [ 1, 2, 3, 4 ]
var secondslice = a.slice(-1); # [ 5 ]
firstslice.unshift(...secondslice);
console.log(firstslice.join(' '));