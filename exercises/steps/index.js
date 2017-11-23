// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// SOLUTION 1
function steps(n) {

    for (let row = 0; row < n; row++)  { // From 0 to n(iterate through rows)
    
        let stair = ''; // Create an empty string, 'stair'
        
        for (let column = 0; column < n; column++) // From 0 to n(iterate through columns)
            // IF the current column is equal to or less than the current row add a '#' to 'stair'.
            if (column <= row) { 
                stair += "#";
            } else { // Add a space to 'stair'
                stair += " ";
            }         
        
        console.log(stair);
    }
}


// SOLUTION 2(RECURSION)
// function steps(n, row = 0, stair = '') { 

//         // BASE CASE: If (row === n) aka the current row being operated on 
//         // then we have hit the end of our problem.    
//         if (n === row) { // n is 1, 2, or 3, etc.
//             console.log(stair);
//             return;
//         }
        
//         // If the 'stair' string has a length === n then we are the end of a row.
//         if (n === stair.length) { 
//             console.log(stair);
//             return steps(n, row + 1);
//         }

//         // If the length of the stair string is less than or equal to the
//         // row number we're working on, we add a '#', otherwise add a space.
//         if (stair.length <= row) {
//             stair += '#';
//         } else {
//             stair += ' ';
//         }
//         steps(n, row, stair);
// }

steps(4);
module.exports = steps;
