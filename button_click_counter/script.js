
let countText = document.getElementById("count");
let button = document.getElementById("btn");

let count = 0;

button.addEventListener("click", function () {
    count++;
    countText.innerText = "Count: " + count;

});