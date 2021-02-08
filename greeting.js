const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LOCALSTORAGE = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LOCALSTORAGE, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCALSTORAGE);
    
    // 현재 유저가 null값이라면
    if (currentUser === null) {
        askForName();
    // 현재 유저가 null이 아니라면
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();