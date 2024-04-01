//this function takes one parameter
function swapCase(str) {
    let swappedStr = "";
    for (let i = 0; i < str.length; i++) {
        //if string is uppercase, convert to lowercase and vice versa
        if (str[i] === str[i].toLowerCase()) {
            swappedStr += str[i].toUpperCase();
        } else {
            swappedStr += str[i].toLowerCase();
        }
    }
    //return the swapped string
    return swappedStr;
}

// Test the function
let inputString = 'The Quick Brown Fox';
let outputString = swapCase(inputString);
console.log(outputString); // Output: 'tHE qUICK bROWN fOX'