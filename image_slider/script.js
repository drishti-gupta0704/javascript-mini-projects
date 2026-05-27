
let image = document.getElementById("sliderImage");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let images = [

    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1025/400/250",
    "https://picsum.photos/id/1035/400/250",
    "https://picsum.photos/id/1045/400/250"

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