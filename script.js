const allBtns = document.querySelectorAll(".buttons")

//add eventlisteners to buttons
function addEventListenerToButtons(nodelist) {
    nodelist.forEach(node => {
        node.addEventListener("click", function() {
            displayButton(node);
        });
    });
}

const displayButton = function(node) {
    const btnText = node.innerText;
    console.log(btnText);
}

addEventListenerToButtons(allBtns)