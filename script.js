let sliderNumber = document.querySelectorAll('.slider--item').length

let currentSlide = 0

document.querySelector('.slider--width').style.width = `calc(800px * ${sliderNumber})`
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`

function goPrevious() {
    currentSlide--
    if(currentSlide < 0) {
        currentSlide = sliderNumber -1
    }
    rollImage()
}

function goNext() {
    currentSlide++
    if(currentSlide >= sliderNumber) {
        currentSlide = 0
    }
    rollImage()
}

function rollImage() {
    let sliderWidth = document.querySelector('.slider--item').clientWidth
    let moviment = (currentSlide * sliderWidth)
    document.querySelector('.slider--width').style.marginLeft = `-${moviment}px`
}

setInterval(goNext, 8000)