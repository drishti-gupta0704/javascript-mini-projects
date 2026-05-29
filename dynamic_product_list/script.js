
let productInput = document.getElementById("productInput");
let addBtn = document.getElementById("addBtn");
let productList = document.getElementById("productList");


addBtn.addEventListener("click", function () {

    let productName = productInput.value;

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    let li = document.createElement("li");
    li.innerText = productName + " ";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    li.appendChild(deleteBtn);
    productList.appendChild(li);

    productInput.value = "";
});


productList.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }

});