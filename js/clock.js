const clock = document.querySelector('#clock')

//clock.innerText = '00:00'

function getClock (e) {
    const date = new Date()
    clock.innerText =  `${getTwoText(date.getHours())}:${getTwoText(date.getMinutes())}:${getTwoText(date.getSeconds())}`
}

function getTwoText (text) {
    return String(text).padStart(2, '0')
}

getClock()
setInterval(getClock, 1000 );