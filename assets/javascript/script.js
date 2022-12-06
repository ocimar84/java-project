//********************************************** */

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#size");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let charset = 'abcdefghijklmnopqrstubxwzABCDEFGHIJKLMNOPQRSTUVXZ!@123456789';
let newpassword = '';
let history = document.getElementById('history');
let facebook = document.getElementById('facebook');
let instagram = document.getElementById('instagram');
let twitter = document.getElementById('twitter');

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

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newpassword = pass;

    addPassword();
}

//Add function copy password */
function copyPassword(passwordValue) {
    password.value = passwordValue;
    password.select();
    password.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passwordValue);

    alert(`Password ${passwordValue} successfully copied!`);
}

/**
 * Creates password
 */
function addPassword() {
    let list = JSON.parse(window.localStorage.getItem("list")) || [];
    let item = {
        'index': list.length,
        'label': 'generic',
        'key': password.value
    };

    if (facebook.checked) {
        item.label = 'facebook';
    } else if (twitter.checked) {
        item.label = 'twitter';
    } else if (instagram.checked) {
        item.label = 'instagram';
    }

    list.push(item);

    window.localStorage.setItem('list', JSON.stringify(list));

    showPassword(item);
}

/**
 * Remove password
 */
function removePassword(index) {
    let list = JSON.parse(window.localStorage.getItem("list")) || [];
    list.splice(index, 1);

    window.localStorage.setItem('list', JSON.stringify(list));

    listPassword();
}

/**
 * Refresh password
 */
function refreshPassword(index) {
    let list = JSON.parse(window.localStorage.getItem("list")) || [];
    let newItem = list[index];

    let pass = '';
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    newItem.key = pass;

    list[index] = newItem;

    window.localStorage.setItem('list', JSON.stringify(list));

    listPassword();
}

/**
 * Creates a div with password
 */
function showPassword(item) {
    let passwordDiv = document.createElement('div');
    let keyDiv = document.createElement('div');

    passwordDiv.classList.add('line');

    /* Add icon to password based on what radio button was selected*/
    if (item.label == "facebook") {
        let facebookIcon = document.createElement('span');
        facebookIcon.innerHTML = `<i class="icon fab fa-facebook-f"></i>`;
        passwordDiv.appendChild(facebookIcon);
    } else if (item.label == "twitter") {
        let twitterIcon = document.createElement('span');
        twitterIcon.innerHTML = `<i class="icon fa-brands fa-twitter"></i>`;
        passwordDiv.appendChild(twitterIcon);
    } else if (item.label == "instagram") {
        let instagramIcon = document.createElement('span');
        instagramIcon.innerHTML = `<i class="icon fa-brands fa-square-instagram"></i>`;
        passwordDiv.appendChild(instagramIcon);
    }

    passwordDiv.appendChild(keyDiv);

    keyDiv.innerHTML = `<p>${item.key}</p>`;

    let controls = document.createElement('div');
    controls.innerHTML = `<div class="controls"><i onclick="copyPassword('${item.key}')" class="fa-regular fa-copy"></i><i onclick="refreshPassword(${item.index})" class="fa-solid fa-arrows-rotate"></i><i onclick="removePassword(${item.index})" class="fa-solid fa-trash-can"></i></div>`;

    passwordDiv.appendChild(controls);

    history.prepend(passwordDiv);
}

/**
 * Creates a div with all passwords
 */
function listPassword() {
    let list = JSON.parse(window.localStorage.getItem("list")) || [];

    history.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        let item = list[i];

        item.index = i;

        showPassword(item);

        list[i] = item;
    }

    window.localStorage.setItem('list', JSON.stringify(list));
}

listPassword();