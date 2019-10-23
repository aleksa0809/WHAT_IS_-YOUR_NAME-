let username = getEl("username");
let buttonSave = getEl("buttonSave");
let screen1element = getEl("screen1");
let screen2element = getEl("screen2");
let buttonClean = getEl("clean");
let x = getEl("currentName");

buttonSave.addEventListener('click', log_in);
buttonClean.addEventListener('click', clean);

let currentUser = null;
currentUser = localStorage.getItem("currentUser");

if (currentUser) {
    x.innerHTML = currentUser;
} else {
    buttonClean.style.display = 'none';
}

function log_in() {
    if (username.value) {
        localStorage.setItem('currentUser', username.value);
        buttonClean.style.display = 'block'; // pokazivaetsa
        x.innerHTML = username.value;
    } else {
        alert('empty field !!!');
    }
}

function clean() {
    localStorage.removeItem("currentUser");
    username.value = "";
    x.innerHTML = "";
    buttonClean.style.display = 'none';
}

function getEl(id) {
    return document.getElementById(id);
}