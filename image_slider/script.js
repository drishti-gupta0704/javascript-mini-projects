
let image = document.getElementById("sliderImage");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let images = [

    "https://i.pinimg.com/736x/c8/c3/c6/c8c3c690edca3f4340058e79a1f47ac7.jpg",
    "https://i.pinimg.com/736x/e0/8a/ec/e08aec49eb718a513a60241acfb75db9.jpg",
    "https://i.pinimg.com/736x/68/ea/87/68ea878d669aabae852272d8cb0f2c27.jpg",
    "https://i.pinimg.com/736x/0f/c7/ea/0fc7ea9ad7ad9eff6fad322cf2197f92.jpg"

];


let currentIndex = 0;

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;

    }
    image.src = images[currentIndex];

});


prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    image.src = images[currentIndex];

});