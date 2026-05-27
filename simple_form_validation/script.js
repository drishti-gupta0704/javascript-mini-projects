

let form = document.getElementById("myForm");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let error = document.getElementById("error");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let usernameValue = username.value;
    let emailValue = email.value;
    let passwordValue = password.value;


    if (usernameValue === "") {
        error.innerText = " Username required";

    }

    else if (emailValue === "") {
        error.innerText = " Email required";

    }

    else if (passwordValue === "") {
        error.innerText = " Password required";

    }

    else {
        error.innerText = " Form submitted successfully";

    }

});