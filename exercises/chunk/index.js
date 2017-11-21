// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]] where 2 means  2 elements in each chunk.
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]] where 4 means 4 elements in each chunk.
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // SOLUTION 1
    // // Create empty array to hold chunks called "chunked".
    // const chunked = [];
    
    // // For each element in the "unchunked" array.
    // for (let element of array ) {
    //     // Retrieve the last element in unchunked array.
    //     const last = chunked[chunked.length - 1];
    //     console.log(`last: ${last} | element: ${element}`)
        
    //     // If last element does not exist, or if its length is equal to chunk size. 
    //     if (!last || last.length === size) {
    //         // Push a new chunk into 'chunked' with the current element.
    //         chunked.push([element]);       
    //     } else { // else add the current element into the chunk.
    //         last.push(element);
    //     }
    // }
    // return chunked;

    // SOLUTION 2 way better
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        console.log(`index: ${index} | arraylength: ${array.length}`);
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
    // index: 0 | arraylength: 5
    // index: 2 | arraylength: 5
    // index: 4 | arraylength: 5
    // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
}
        
console.log(chunk([1, 2, 3, 4, 5], 2));
module.exports = chunk;
