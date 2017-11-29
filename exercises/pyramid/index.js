// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {

//     // Calculate midpoint of row.
//     const midpoint = Math.floor((2 * n - 1) /2);

//     for (let row = 0; row < n; row ++) { // iterate thru rows
//         let level = ''; // Define level.

//         for (let column = 0; column < 2 * n - 1; column++) { // number of columns
//             console.log('MIDPOINT: ' + midpoint + ' -- ' + 'ROW: ' + row + ' -- ' + 'COLUMN: ' + column); 
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level  += '#';
//             } else {
//                 level += ' ';
//             }
//         }

//         console.log(level);
//     }
// }

// pyramid(3);

function pyramid(n,r=1,str=""){
 if(r>n){
   return
 }
 
 // the for loop create the rth line 
 for(let i=0;i<2*n-1;i++){
   // at the rth line, the total number of "#" are 2r-1(in the first floor's case, it is 2r+1) 
   // exclude the middle #, it becomes 2r-2
   // allocate the total 2r-2 characters equally to the both sides of middle.
   // so the number of "#" allocated to the left and right should both be (2r-2)/2 =r-1
   // the middle point is (Math.floor(2*n-1)/2) which is n-1, the break point between "#" and space should be
   // left: n-1-(r-1)=n-r 
   // right: n-1+(r-1)=n+r-2
   
   if(i<n-r||i>n+r-2){
     str+=" "
   }else{
     str+="#"
   }
 }
 console.log(str)
 pyramid(n,r+1)
}


module.exports = pyramid;
