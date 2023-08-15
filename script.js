const allBtns = document.querySelectorAll(".buttons")
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const operators = ["+", "-", "*", "/"]

let number1 = "empty"
let number2 = "empty"
let operator = "empty"

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
                operate(number1, number2, operator)
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
    number1 = "empty"
    number2 = "empty"
    operator = "empty"
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
        console.log("Can't divide by zero");
    } else {
        return number1 / number2;
    }
}

const multiplyFunction = function(number1, number2) {
    return number1 * number2;
}

const operate = function(number1, number2, operator) {
    if (operator === "+") {
        console.log(addFunction(parseFloat(number1), parseFloat(number2)));
    } else if (operator === "-") {
        subtractFunction(number1, number2);
    } else if (operator === "*") {
        multiplyFunction(number1, number2);
    } else if (operator === "/") {
        divideFunction(number1, number2);
    }
}

const storeNumber = function(node) {
    const btnText = node.innerText;
    if (number1 === "empty") {
        number1 = btnText;
    } else if (number1 !== "empty" && numbers.includes(btnText) && operator === "empty") {
        number1 += btnText;
    } else if (operators.includes(btnText) && operator === "empty") {
        operator = btnText;
    } else if (operators.includes(btnText) && operator !== "empty") { //operator needs to take the new operator and result
        operate(number1, number2, operator)
    } else if (number1 !== "empty" && operator !== "empty" && number2 === "empty") { 
        number2 = btnText;
    } else if (number1 !== "empty" && operator !== "empty" && number2 !== "empty") {
        number2 += btnText;
    }
}

addEventListenerToButtons(allBtns)


//TODO:
//C-Button: Delete text in display
//+ Button: Function to add numbers
//- Button: Function to subtract numbers
//* Button: Function to multiply numbers
// /-Button: Funcion to divide numbers
//= Button to calculate the result


//Wenn Z1 == 0:
    //Z1 == neue Zahl
//Sonst, wenn 