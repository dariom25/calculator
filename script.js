const allBtns = document.querySelectorAll(".buttons")
let storedValues = []

//add eventlisteners to buttons
function addEventListenerToButtons(nodelist) {
    nodelist.forEach((node, index) => {
        node.addEventListener("click", function() {
            if (index === 0) {
                clearAllEntriesFromDisplay();
            } else if (index === 1) {
                displayButton(node);
                storeNumber(node);
            } else if (index === 2) {
                displayButton(node);
                storeNumber(node);

            } else if (index === 14) {
                displayButton(node);
                storeNumber(node);

            } else if (index === 15) {
                displayButton(node);
                storeNumber(node);

            } else if (index === 16) {
                displayButton(node);
                storeNumber(node);

            } else {
                displayButton(node);
                storeNumber(node);

            }
            
        });
    });
}

//display buttons in display-field
const displayButton = function(node) {
    const btnText = node.innerText;
    const displayText = document.createElement("div") //maybe it is smarter to add the text to the div than to create new divs --> how to deal with linebreak?
    displayText.classList.add("calculations")
    displayText.textContent = btnText
    const display = document.querySelector(".display")
    display.appendChild(displayText)
}

//clears the display of the calculator
const clearAllEntriesFromDisplay = function() {
    const entries = document.querySelectorAll(".calculations");
    entries.forEach(entry => entry.remove());
    storedValues = []
}

//adds parameters up
const addFunction = function(number1, number2) {
    return number1 + number2;
}

const subtractFunction = function(number1, number2) {
    return number1 - number2;
}

const divideFunction = function(number1, number2) {
    if (number2 === 0) {
        console.log("Cant divide by zero");
    } else {
        return number1 / number2;
    }
}

const multiplyFunction = function(number1, number2) {
    return number1 * number2;
}

//variable 1 speichert zahl A, v2 Zahl B. v3 den operator dann wird die rechnung ausgeführt und das ergebnis zwischengespeichert in v4. dann wird weitergerechnet.

const operate = function(array) {
    let number1 = 0;
    let operator;
    let number2 = 0;
}

const storeNumber = function(node) {
    const btnText = node.innerText;
    storedValues.push(btnText);
    console.log(storedValues);
}

addEventListenerToButtons(allBtns)


//TODO:
//C-Button: Delete text in display
//+ Button: Function to add numbers
//- Button: Function to subtract numbers
//* Button: Function to multiply numbers
// /-Button: Funcion to divide numbers
//Logic like Punkt vor Strich
//= Button to calculate the result
//Calculation-logic: Add every event into an array?