const calculatorButtons = [["C", "/", "*"], ["7", "8", "9", "-"], ["4", "5", "6", "+"], ["1", "2", "3"], ["0"]]
const buttonContainer = document.querySelector(".button-container")









//create 5 divs to contain a row of buttons
const buttonRows = () => {
    for (let i = 0; i < 5; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        buttonContainer.appendChild(row);
    }
}


//create buttons and add them to the DOM
calculatorButtons.forEach((button) => {
    button.forEach((element) => {
        let btn = document.createElement("button");
        btn.textContent = element;
        btn.classList.add("buttons");
        buttonContainer.appendChild(btn);
    });
})