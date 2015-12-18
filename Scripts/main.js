// Variable Declarations
var toggleButton = document.getElementsByTagName("button");
var counter = 0;

// add an event listener to the toggle button
for (var i=0; i<toggleButton.length;i++) {
    toggleButton[i].addEventListener("click", toggleButtonClicked);
}

// toggle button event handler
function toggleButtonClicked() {
    counter++;
    theCart.innerHTML = counter;
}