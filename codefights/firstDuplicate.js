// Given an array a that contains only numbers in the range from 1 to a.length, 
// find the first duplicate number for which the second occurrence has the 
// minimal index. In other words, if there are more than 1 duplicated numbers, 
// return the number for which the second occurrence has a smaller index than 
// the second occurrence of the other number does. 
// If there are no such elements, return -1.

// Example

// For a = [2, 3, 3, 1, 5, 2], the output should be
// firstDuplicate(a) = 3.

// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a 
// smaller index than than second occurrence of 2 does, so the answer is 3.

// For a = [2, 4, 3, 5, 1], the output should be
// firstDuplicate(a) = -1.

var a = [2, 3, 3, 1, 5, 2, 3, 3, 4, 4];

function findDuplicates(data) {

    let result = [];
    let dupIndex = [];

    data.forEach(function(element, index) {

        // Find if there is a duplicate or not by starting search
        // for that element at its index position + 1.
        if (data.indexOf(element, index + 1) > -1) { // Look for element starting at index + 1 and if found proceed.

            dupIndex.push(data.indexOf(element, index + 1));

            // If the duplicate is not in results array then push it in.
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        }
    });

    return result; // Returns array of duplicates.

    // return first found duplicate value.
    // if (dupIndex[0] < dupIndex[1]) {
    //     return data[dupIndex[0]];
    // }
    // return data[dupIndex[1]];
}

console.log(findDuplicates(a));