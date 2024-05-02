// Last item function
function lastItem() {
    var arrayName = ['Watermelon', 'Apple', 'Orange', 'Kiwi']
    var y = arrayName.slice();
    var selectedElement = document.getElementById("fruit");
    var x = arrayName.sort();
    selectedElement.innerText = `The original array is [${y}], and I sorted it alphabetically.
    The last item of the sorted array is ${x[x.length - 1]}.`;
  }
  
// WHERE DO WE CONSTRUCT THE NEW OBJECT?
const responses = {};

function sortItemsInput() {

    // ASK HOW MANY ITEMS TO ENTER, CHECK THE NUMBER PROVIDED BY THE PROMPT
    while(isNaN(numItems) || numItems > 4 || numItems < 2 || !(Number.isInteger(numItems))){
        var numItems = Number(prompt('How many items would you like to enter? 2-4.'))
    }

    // COLLECT INPUT FROM USER
    for (let index = 0; index < numItems; index++) {
        let catInput = prompt(`Enter category ${index+1} of ${numItems}.`)
        let catItem = prompt(`Enter your ${catInput}`)
        responses[catInput] = catItem;
        // We cannot create the responses object here!
    };

    // IF YOU WANT TO SORT BY KEY
    const responseKeys = Object.keys(responses).sort();

    for (const key of responseKeys) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `Your ${key.toLowerCase()} is ${responses[key]}`
        document.getElementById('outputArray').appendChild(newDiv)
    }
};

// FIRST FUNCTION: Trivia Question
function checkTriviaAnswer() {
    const answerInput = document.getElementById("triviaInput");
    const answer = answerInput.value.trim();
    const correctAnswer = "Paris";  // Example correct answer
    const response = answer === correctAnswer ?
        `You guessed ${answer}. Correct!` :
        `You guessed ${answer}. Incorrect! The correct answer is ${correctAnswer}.`;
    
    document.getElementById("triviaResponse").innerText = response;
}

// SECOND FUNCTION: Odd or Even Number Checker
function checkNumber() {
    const numInput = document.getElementById("numberInput");
    const num = parseInt(numInput.value, 10);

    if (!isNaN(num) && num >= 10000 && num <= 99999 && num === Math.floor(num)) {
        const isEven = num % 2 === 0;
        document.getElementById("numberResponse").innerText = `The number ${num} is an ${isEven ? 'even' : 'odd'} number.`;
    } else {
        document.getElementById("numberResponse").innerText = "Please enter a valid 5-digit integer.";
    }
}