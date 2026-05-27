
let countText = document.getElementById("count");

let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let message = document.getElementById("message");

let count = 0;



function updateUI() {

    countText.innerText = count;

    if (count > 0) {
        countText.style.color = "green";
    }

    else if (count < 0) {
        countText.style.color = "red";
    }

    else {
        countText.style.color = "black";
    }

    if (count === 10) {
        message.innerText = "Great! Count reached 10";
    }

    else if (count === -10) {
        message.innerText = "Count reached -10";
    }

    else {
        message.innerText = "";
    }

}


increaseBtn.addEventListener("click", function () {
    count++;
    updateUI();

});


decreaseBtn.addEventListener("click", function () {
    count--;
    updateUI();

});


resetBtn.addEventListener("click", function () {
    count = 0;
    updateUI();

});