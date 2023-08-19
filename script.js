const allBtns = document.querySelectorAll(".buttons")
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const operators = ["+", "-", "*", "/"]

let number1 = "empty"
let number2 = "empty"
let operator = "empty"
let result = "empty"
let counter = 0

//add eventlisteners to buttons
function addEventListenerToButtons(nodelist) {
    nodelist.forEach((node, index) => {
        node.addEventListener("click", function() {
            if (index === 0) {
                clearAll();
            } else if (index === 1 && number1 !== "empty") {
                displayButton(node);
                storeNumber(node);
            } else if (index === 2 && number1 !== "empty") {
                displayButton(node);
                storeNumber(node);
            } else if (index === 14 && number1 !== "empty") {
                displayButton(node);
                storeNumber(node);
            } else if (index === 15 && number1 !== "empty") {
                displayButton(node);
                storeNumber(node);
            } else if (index === 16) {
                if (number1 === "empty" || number2 === "empty" || operator === "empty") {
                    alert("Enter a full calculation!")
                } else {
                    operate(number1, number2, operator);
                    operator = "empty";
                    counter++;
                }
            } else if (index === 1 || index === 2 || index === 14 || index === 15 && operator === "empty") {
                alert("Invalid input!")
            } else {
                if (counter % 2 === 1) {
                    clearAll();
                    displayButton(node);
                    storeNumber(node);
                    counter = 0;
                } else if (counter % 2 === 0) {
                    displayButton(node);
                    storeNumber(node);
                }
                
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

const displayValue = function(result) {
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
    counter = 0;
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
        return "empty";
    } else {
        return number1 / number2;
    }
}

const multiplyFunction = function(number1, number2) {
    return number1 * number2;
}

const operate = function(no1, no2, operand) {
    if (operand === "+") {
        result  = addFunction(parseFloat(no1), parseFloat(no2));
    } else if (operand === "-") {
        result = subtractFunction(parseFloat(no1), parseFloat(no2));
    } else if (operand === "*") {
        result = multiplyFunction(parseFloat(no1), parseFloat(no2));
    } else if (operand === "/") {
        result = divideFunction(parseFloat(no1), parseFloat(no2));
    }
    clearDisplay();
    displayValue(result);
    number1 = result.toString();
    number2 = "empty";
    result = "empty";
}

const removeOperator = function() {
    const operand = document.querySelectorAll(".calculations")
    operand.forEach((element) => {
        let textOfElement = element.textContent;
        if (operators.includes(textOfElement)) { 
            element.remove();
        };
    }); 
}

const storeNumber = function(node) {
    const btnText = node.innerText;
    if (number1 === "empty" && numbers.includes(btnText)) {
        number1 = btnText;
    } else if (number1 !== "empty" && numbers.includes(btnText) && operator === "empty") { //adds to number1
        number1 += btnText;
    } else if (operators.includes(btnText) && operator === "empty") { //adds to number1
        operator = btnText;
    } else if (operators.includes(btnText) && operator !== "empty" && number2 === "empty") { //overwrites current operator
        removeOperator();
        operator = btnText;
        displayValue(operator)
    } else if (operators.includes(btnText) && operator !== "empty") { //operates and takes new operator
        operate(number1, number2, operator)
        operator = btnText;
        displayValue(operator)
    } else if (number1 !== "empty" && operator !== "empty" && number2 === "empty") { //add2 to number2
        number2 = btnText;
    } else if (number1 !== "empty" && operator !== "empty" && number2 !== "empty") { //adds to number2
        number2 += btnText;
    }
}

addEventListenerToButtons(allBtns)


//TODO:
//Zu Beginn soll eine 0 im Display angezeigt werden 
//Kommas ermöglichen
//Tastatureingaben ermöglichen