//Prompt the user input.
const prompt = require("prompt-sync")({ sigint: true });
//Split the array string provided by the input into substrings and convert it to an array of numbers.
const input = prompt ('Please provide an array: ');
const array = input.split('').map(Number);

//Create a function that checks if a number is a prime number.
function isPrime(num) {
    if (num <= 1 || isNaN(num)) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//Filter the array using the .filter() method and the .isPrime() function as a callback.
const primeNumbers = array.filter(isPrime);

console.log(primeNumbers);