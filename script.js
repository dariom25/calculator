const allBtns = document.querySelectorAll(".buttons")

//add eventlisteners to buttons
function addEventListenerToButtons(nodelist) {
    nodelist.forEach((node, index) => {
        node.addEventListener("click", function() {
            if (index === 0) {
                clearAllEntriesFromDisplay();
            } else if (index === 1) {
                displayButton(node);
            } else if (index === 2) {
                displayButton(node);
            } else if (index === 14) {
                displayButton(node);
            } else if (index === 15) {
                displayButton(node);
            } else if (index === 16) {
                displayButton(node);
            } else {
                displayButton(node);
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
}

//adds parameters up
const addFunction = function(number1, number2) {
    return number1 + number2;
}

const subtractFunction = function(number1, number2) {
    return number1 - number2;
}

//variable 1 speichert zahl A, v2 Zahl B. v3 den operator dann wird die rechnung ausgeführt und das ergebnis zwischengespeichert in v4. dann wird weitergerechnet.

const operate = function(number1, operator, number2) {

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