function filterPrimes(arr) {
    function isPrime(num) {
        //checks if the number is less than or equal to 1, such numbers are not prime
        if (num <= 1) return false;
        //checks if the number is 2 or 3, these are prime numbers
        if (num <= 3) return true;
 // checks if the number is divisible by 2 or 3,since even numbers greater than 2 and multiples of 3 are not prime
        if (num % 2 === 0 || num % 3 === 0) return false;
//checks divisibility by numbers of the form 6k ± 1, where k is an integer 
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
//if the number passes all the above conditions, it is prime
        return true;
    }

    return arr.filter(num => {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return num === 2 || num === 3;

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }

        return true;
    });
}

// let us test the function using console.log
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimes(inputArray);
console.log(primeNumbers); // Output: [2, 3, 5, 7]