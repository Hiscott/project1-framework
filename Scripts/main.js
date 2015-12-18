// Variable Declarations
var toggleButton = document.getElementById("menu-button");
var counter = 0;


// add an event listener to the toggle button
toggleButton.addEventListener("click", toggleButtonClicked);

// toggle button event handler
function toggleButtonClicked() {
    counter++;
    theCart.innerHTML = counter;
}
