const API_KEY = 'cd9a51369c3fc19f9fb85b2f2508b5d5'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const weatherContainer = document.querySelector('#weather span:first-child')
        const cityContainer = document.querySelector('#weather span:last-child')
        weatherContainer.innerText = `${data.weather[0].main }`
        cityContainer.innerText = `City : ${data.name} / Temperature : ${data.main.temp}℃`

    })
}
function onGeoError () {
    alert("Can't find you, No Weather Info")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
