
let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");
let addBtn = document.getElementById("addBtn");
let expenseList = document.getElementById("expenseList");
let totalDisplay = document.getElementById("total");


// array to store expenses
let expenses = [];
let total = 0;


// add expense
addBtn.addEventListener("click", function () {

    let name = expenseName.value;
    let amount = Number(expenseAmount.value);

    // validation
    if (name === "" || amount === "") {
        alert("Please enter valid data");
        return;
    }

    // create expense object
    let expense = {
        name: name,
        amount: amount
    };

    // push to array
    expenses.push(expense);

    // update total
    total += amount;

    // render UI
    renderExpenses();

    // clear inputs
    expenseName.value = "";
    expenseAmount.value = "";
});


// render function (DOM sync with array)
function renderExpenses() {

    // clear list
    expenseList.innerHTML = "";

    // loop through array
    expenses.forEach(function (exp, index) {

        let li = document.createElement("li");

        li.innerText = exp.name + " - ₹" + exp.amount + " ";

        // delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        li.appendChild(deleteBtn);
        expenseList.appendChild(li);

        // delete functionality
        deleteBtn.addEventListener("click", function () {

            // remove from total
            total -= exp.amount;

            // remove from array
            expenses.splice(index, 1);

            // re-render UI
            renderExpenses();
        });
    });

    // update total display
    totalDisplay.innerText = "Total: ₹" + total;
}