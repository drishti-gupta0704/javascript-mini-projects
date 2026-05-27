
let noteInput = document.getElementById("noteInput");
let addBtn = document.getElementById("addBtn");
let notesContainer = document.getElementById("notesContainer");

addBtn.addEventListener("click", function () {

    let noteText = noteInput.value;

    if (noteText === "") {
        alert("Please write a note");
        return;
    }

    let noteCard = document.createElement("div");
    noteCard.innerText = noteText;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";


    noteCard.appendChild(document.createElement("br"));
    noteCard.appendChild(deleteBtn);
    notesContainer.appendChild(noteCard);
    noteInput.value = "";

});



notesContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();

    }

});