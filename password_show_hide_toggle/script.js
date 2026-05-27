
let passwordInput = document.getElementById("password");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.innerText = "Hide";

    }

    else {
        passwordInput.type = "password";
        toggleBtn.innerText = "Show";
    }

});