// Variable to store the counter value
let count = 0;

// Selecting HTML elements
const countText = document.getElementById("count");

const message = document.getElementById("message");

const increaseBtn = document.getElementById("increase");

const decreaseBtn = document.getElementById("decrease");

const resetBtn = document.getElementById("reset");


// Function to update the screen
function updateCounter() {

    countText.innerText = count;

    if (count > 0) {

        countText.style.color = "green";

        message.innerText = "Positive Number ";

    }

    else if (count < 0) {

        countText.style.color = "red";

        message.innerText = "Negative Number ";

    }

    else {

        countText.style.color = "blue";

        message.innerText = "Counter Reset ";

    }

}


// Increase Button
increaseBtn.addEventListener("click", function () {

    count++;

    updateCounter();

});


// Decrease Button
decreaseBtn.addEventListener("click", function () {

    count--;

    updateCounter();

});


// Reset Button
resetBtn.addEventListener("click", function () {

    count = 0;

    updateCounter();

});
