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