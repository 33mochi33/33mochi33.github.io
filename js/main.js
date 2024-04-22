// Function for the first button
function greetUser() {
    // Create a new instance of Date object
    const now = new Date();
    // Get the current hour of the day
    const hour = now.getHours();
    let greeting;
    
    // Determine the appropriate greeting based on the hour
    if (hour > 5 && hour < 11) {
        greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    
    // Display the greeting message in an alert
    alert(greeting);
}

// Function for the second button
function changeButtonTextAndClass() {
    // Select the second button element by its ID
    let button = document.getElementById("button2");
    
    // Log the current text and class of the button
    console.log("Before change:", button.textContent, button.className);
    
    // Change the label text of the button to "Done"
    button.textContent = "Done";
    // Change the class of the button to "btn btn-success"
    button.className = "btn btn-success";
    
    // Log the updated text and class of the button
    console.log("After change:", button.textContent, button.className);
}

// Add event listeners to the buttons
document.getElementById("button1").addEventListener("click", greetUser);
document.getElementById("button2").addEventListener("click", changeButtonTextAndClass);

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

// Event listener to check the answer when the Enter key is pressed
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("triviaInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            checkTriviaAnswer();
        }
    });

    document.getElementById("numberInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            checkNumber();
        }
    });
});
