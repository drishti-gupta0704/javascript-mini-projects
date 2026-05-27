
let textInput = document.getElementById("textInput");
let countText = document.getElementById("count");

textInput.addEventListener("input", function () {
    let text = textInput.value;
    let count = text.length;
    countText.innerText = "Characters: " + count;

});