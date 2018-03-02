function reverse(str) {
    let reversed = '';

    return str.split('').reverse().join('');
}

console.log(reverse('jairo'));


function jairo(...args) {
    console.log(args);
    console.log(args[args.length - 1]);
}

jairo('1', '2', '3');

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