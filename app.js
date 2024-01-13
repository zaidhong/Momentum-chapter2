//const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const loginButton = document.querySelector('#login-form button')

function onLoginBtnClick () {
    const val = loginInput.value
    if(val === '') {
        console.log('내용을 적어라')
    }
    else if(val.length >= 15){
        console.log('내용이 길다')
    } else if(val.length < 4){
        console.log('내용이 짧다')
    } else {
        console.log(val)
    }
    
    
}
loginButton.addEventListener('click', onLoginBtnClick)