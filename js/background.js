
const selectImgIdx = Math.floor(Math.random() * 10)

const image = document.createElement('img')

image.src = `./img/${selectImgIdx}.jpg`
document.body.style.backgroundImage =`url(${image.src})`
//document.body.appendChild(image)