//this function takes two parameters
function generateArray(start, end) {
    //initialize an empty array to store the generated sequence of numbers
    let result = [];
    //check if the starting number is less than or equal to the ending number
    if (start <= end) {
        //if the starting number is less than or equal to the ending number,
        //iterate from the staring number to the ending number
        for (let i = start; i <= end; i++) {
            //push each number in the sequence to the array
            result.push(i);
        }
    } else {
        //if the staring number is greater than the ending number,
        //iterate from the starting number to the ending number
        for (let i = start; i >= end; i--) {
            //push each number in the sequence to the array
            result.push(i);
        }
    }
    //return the generated array
    return result;
}

// Test the function with console.log
console.log(generateArray(4, 7)); // Output: [4, 5, 6, 7]
console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]