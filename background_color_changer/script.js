
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



button.addEventListener("click", function () {

    let randomColor = generateColor();
    document.body.style.backgroundColor = randomColor;
    colorCode.innerText = "HEX Color: " + randomColor;

});