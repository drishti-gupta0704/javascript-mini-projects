
let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");
let button = document.getElementById("calculateBtn");
let result = document.getElementById("result");
let statusText = document.getElementById("status");

button.addEventListener("click", function () {

   
    let height = heightInput.value;
    let weight = weightInput.value;
    let bmi = weight / (height * height);
    result.innerText = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 18.5) {
        statusText.innerText = "Underweight";
    }

    else if (bmi >= 18.5 && bmi < 25) {
        statusText.innerText = "Normal Weight";

    }

    else if (bmi >= 25 && bmi < 30) {
        statusText.innerText = "Overweight";

    }

    else {
        statusText.innerText = "Obese";
    }

});