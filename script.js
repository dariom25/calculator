const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]
const buttonContainer = document.querySelector(".button-container")












//create buttons and add them to the DOM
numbers.forEach((number) => {
    let numberBtn = document.createElement("button");
    numberBtn.textContent = number;
    numberBtn.classList.add("buttons");
    buttonContainer.appendChild(numberBtn);
})