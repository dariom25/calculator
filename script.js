const allBtns = document.querySelectorAll(".buttons")
const display = document.querySelector(".display")

//add eventlisteners to buttons
function addEventListenerToButtons(nodelist) {
    nodelist.forEach(node => {
        node.addEventListener("click", function() {
            displayButton(node);
        });
    });
}

//display buttons in display-field
const displayButton = function(node) {
    const btnText = node.innerText;
    const displayText = document.createElement("div")
    displayText.classList.add("calculations")
    displayText.textContent = btnText
    display.appendChild(displayText)
}

addEventListenerToButtons(allBtns)