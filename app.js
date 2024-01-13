const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USER_NAME_KEY = 'username'

function onLoginSubmit (event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem(USER_NAME_KEY, username)
    paintGreetings(username)
}

function paintGreetings(){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `HELLO ${username}`
}


const savedUsername = localStorage.getItem(USER_NAME_KEY)

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    paintGreetings(savedUsername)
}