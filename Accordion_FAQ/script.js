
let faqContainer = document.getElementById("faqContainer");

faqContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("question")) {
        let answer = event.target.nextElementSibling;

        if (answer.style.display === "none") {
            answer.style.display = "block";

        }

        else {
            answer.style.display = "none";
        }

    }

});