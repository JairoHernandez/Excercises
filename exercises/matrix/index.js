// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    const results = [];

    // Create n arrays.
    for (let i = 0; i < n; i++) {
        results.push([]);
    }
    // console.log(results); //[ [], [], [] ]

    let counter = 1; // value of element in the array.
    // End column and End row depend on the n value.
    // All of these values will change over time.
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row 
        for (let i = startColumn; i <= endColumn; i++) { // move based on columns
            results[startRow][i]= counter;
            counter++;
        } // [1, 2, 3], [], []
        startRow++; // Move on to second row.
        
        // Right column bottom 2 values 
        for (let i = startRow; i <= endRow; i++) { // move bassed on rows
            results[i][endColumn] = counter;
            counter++;
        } // [1, 2, 3], [ , ,4], [ , , 5]
        // Move to 2nd column(1).
        endColumn--;
        
        // Bottom row column 0, 1 
        for (let i = endColumn; i >= startColumn; i--) { // move based on columns.
            results[endRow][i] = counter;
            counter++;
        } // [1, 2, 3], [ , ,4], [ 7, 6, 5]
        // Go up to 2nd row.
        endRow--;
        
        // console.log(endRow, startColumn); // 1, 0 Executes one loop  
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++; 
        } // [1, 2, 3], [ 8, , 4], [ 7, 6, 5]
        startColumn++;

    }
    console.log(results);
}

matrix(3);
module.exports = matrix;
