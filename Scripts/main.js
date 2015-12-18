// Variable Declarations

// toggle button event handler
function toggleButtonClicked() {
    counter++;
    theCart.innerHTML = counter;
}
var counter = 0;
function organized() {
    var toggleButton = document.getElementsByTagName("button");



    // add an event listener to the toggle button
    for (var i=0; i<toggleButton.length;i++) {
        addEvent(toggleButton[i], 'click', toggleButtonClicked);
    }
}
organized();