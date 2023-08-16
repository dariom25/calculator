const allBtns = document.querySelectorAll(".buttons")
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const operators = ["+", "-", "*", "/"]

let number1 = "empty"
let number2 = "empty"
let operator = "empty"
let result = "empty"

//add eventlisteners to buttons
function addEventListenerToButtons(nodelist) {
    nodelist.forEach((node, index) => {
        node.addEventListener("click", function() {
            if (index === 0) {
                clearAll();
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
    const displayText = document.createElement("div"); //maybe it is smarter to add the text to the div than to create new divs --> how to deal with linebreak?
    displayText.classList.add("calculations");
    displayText.textContent = btnText;
    const display = document.querySelector(".display");
    display.appendChild(displayText);
}

const displayResult = function(result) {
    const displayText = document.createElement("div")
    displayText.classList.add("calculations")
    displayText.textContent = result
    const display = document.querySelector(".display")
    display.appendChild(displayText)
}

//clears the display of the calculator
const clearAll = function() {
    clearDisplay();    
    clearStoredValues();
}

const clearDisplay = function() {
    const entries = document.querySelectorAll(".calculations");
    entries.forEach(entry => entry.remove());
}

const clearStoredValues = function() {
    number1 = "empty";
    number2 = "empty";
    operator = "empty";
    result = "empty";
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
        result  = addFunction(parseFloat(number1), parseFloat(number2));
    } else if (operator === "-") {
        result = subtractFunction(parseFloat(number1), parseFloat(number2));
    } else if (operator === "*") {
        result = multiplyFunction(parseFloat(number1), parseFloat(number2));
    } else if (operator === "/") {
        result = divideFunction(parseFloat(number1), parseFloat(number2));
    }
    clearDisplay();
    displayResult(result);
    number1 = toString(result);
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
//Wenn etwas ausgerechnet wird, soll das Ergebnis im Display erscheinen
//Wenn ein zweites Mal ein Operand genutzt wird, soll gerechnet werden und das Ergebnis weiterverwendet werden
//Zu Beginn soll eine 0 im Display angezeigt werden