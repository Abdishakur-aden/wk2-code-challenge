//Prompt the user input.
const prompt = require("prompt-sync")({ sigint: true });
//Create two prompt variables to store the starting number and ending number.
const startingNumber = parseInt(prompt ('Please enter a starting number: '));
const endingNumber = prompt ('Please enter an ending number: ');

//Create a function that generates an array between two numbers.
function arrayGenerator(num1, num2) {
    //Create an empty array to store the numbers.
    const array = [];
    for (let i = num1; i <= num2; i++) {
        array.push(i);
    }
   return array;
}

//Call the function.
arrayGenerator(startingNumber, endingNumber);

console.log(arrayGenerator(startingNumber, endingNumber));