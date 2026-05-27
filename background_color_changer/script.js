
let button = document.getElementById("colorBtn");
let colorCode = document.getElementById("colorCode");


function generateColor() {

    let characters = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        hexColor += characters[randomIndex];
    }

    return hexColor;
}
/*
method -2 

rgb(255, 0, 0)
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let color = `rgb(${r}, ${g}, ${b})`;

console.log(color);

*/

button.addEventListener("click", function () {

    let randomColor = generateColor();
    document.body.style.backgroundColor = randomColor;
    colorCode.innerText = "HEX Color: " + randomColor;

});