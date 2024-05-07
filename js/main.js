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