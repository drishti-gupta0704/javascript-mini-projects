
let button = document.getElementById("toggleBtn");
let text = document.getElementById("text");

button.addEventListener("click", function () {

    text.classList.toggle("hidden");

    if (text.classList.contains("hidden")) {

        text.style.display = "none";
        button.innerText = "Show Text";
    }

    else {

        text.style.display = "block";
        button.innerText = "Hide Text";
    }

});