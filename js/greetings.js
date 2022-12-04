const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector(".logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function logoutSubmit() {
    localStorage.removeItem(USERNAME_KEY);
    greeting.innerText = "";
    localStorage.removeItem(TODOS_KEY);
    toDoList.innerText = "";
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello, ${username}😉`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);
logoutBtn.addEventListener("click", logoutSubmit);
