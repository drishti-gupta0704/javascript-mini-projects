

let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let modalOverlay = document.getElementById("modalOverlay");
let modal = document.getElementById("modal");

openBtn.addEventListener("click", function () {
    modalOverlay.style.display = "block";
});


closeBtn.addEventListener("click", function () {
    modalOverlay.style.display = "none";
});



modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = "none";

    }

});



document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modalOverlay.style.display = "none";

    }

});