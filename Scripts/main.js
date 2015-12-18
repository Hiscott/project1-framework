// Variable Declarations
var toggleButton = document.getElementsByTagName("button");
var counter = 0;


// add an event listener to the toggle button
toggleButton.addEventListener("click", toggleButtonClicked);

// toggle button event handler
function toggleButtonClicked() {
    counter++;
    theCart.innerHTML = counter;
}
