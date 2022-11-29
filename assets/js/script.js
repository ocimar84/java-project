//********************************************** */

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

//Add function generate Password */

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
//Add function copy password */

function copyPassword() {
    alert("Password successfully copied!")
    navigator.clipboard.writeText(newpassword);
}

//Add localstorage/


h2 = document.getElementById("history");

h2.innerHTML = localStorage.getItem("value");
input.addEventListener("click", display);

function display() {
    localStorage.setItem("value", input.value);
    h2.innerHTML = localStorage.getItem("value");
}