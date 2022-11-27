let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstubxwzABCDEFGHIJKLMNOPQRSTUVXZ!@123456789';
let newpassword = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}


function generatePassword() {

    let pass = '';
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newpassword = pass;
}

function copyPassword() {
    alert("Password successfully copied!")
    navigator.clipboard.writeText(newpassword);
}