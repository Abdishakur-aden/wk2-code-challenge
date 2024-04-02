//Prompt the user input.
const prompt = require("prompt-sync")({ sigint: true });

const text = prompt ('Please enter a text: ');

//Create a function that changes the case of every letter of a string.
function changeCase (text) {
    //Split the text using the .split() method.
    //Iterate through the text using the .map() method.
    const changedText = text.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            return char.toUpperCase();            
        }
    });
    //Join the changed text using the .join() method.
    return changedText.join('');
}

//Call the function.
changeCase(text);

console.log(changeCase(text));