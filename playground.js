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
