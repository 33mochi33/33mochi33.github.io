// Function to find and display the last item alphabetically
function lastItem(items) {
    let sortedItems = items.sort();
    let lastItem = sortedItems[sortedItems.length - 1]; // Get last item in alphabetical order
    document.getElementById("output1").innerHTML = `Original array: ${items.join(', ')}<br>Last item alphabetically: ${lastItem}`;
}

// Funtion to 
function getAndSort (){
    let numberOfCategories = parseInt (prompt ("How many categories would you like to enter? Choose between 2 and 4."))
    while (isNaN (numberOfCategories) || numberOfCategories < 2 || numberOfCategories > 4) {
        numberOfCategories = parseInt (prompt ("Invalid input. Please enter a number between 2 and 4. "));
    }

    let categories = [];
    let items =[];
    let sortedItems =[];

    //collect categories
    for (let i = 0; i < numberOfCategories; i++) {
        categories.push(prompt (`Enter category ${i + 1} of ${numberOfCategories}:`));
    }

    //collect items for each category
    for (let category of categories) {
        let item = prompt (`Enter one ${category}:`);
        items.push(item);
        sortedItems.push(item)
    }
    
    //sort items alphabetically
    sortedItems.sort();

    //create and append the display area
    let displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = `<h2>You entered:</h2><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    displayArea.innerHTML += `<h2>I sorted by:</h2><ul>${sortedItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

//call the function
document.getElementById('sortButton').addEventListener('click',getAndSort);