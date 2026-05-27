
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }


    let li = document.createElement("li");
    li.innerText = taskText + " ";

    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";

    deleteBtn.addEventListener("click", function () {
        li.remove();

    });

});