const allBtns = document.querySelectorAll(".buttons")

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
    console.log(btnText); //change line to display elements in display field
}

addEventListenerToButtons(allBtns)