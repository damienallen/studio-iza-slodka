import $ from 'jquery'

$("#slideshow > img:gt(0)").hide()

const interval = 5000
const fadeTime = 800
let pauseTime = 5000

const nextImage = () => {
    $('#slideshow > img:first')
        .stop()
        .next()
        .show()
        .end()
        .fadeOut(fadeTime)
        .appendTo('#slideshow')
}

const prevImage = () => {
    $('#slideshow > img:first')
        .stop()
        .fadeOut(fadeTime)
        .siblings(":last")
        .prependTo('#slideshow')
        .show()
}

let slideshowTimer = setInterval(() => nextImage(), interval)
let pauseTimeout = null

$('.prev').on('click', () => {
    if (pauseTimeout) clearTimeout(pauseTimeout)
    clearInterval(slideshowTimer)
    prevImage()
    pauseTimeout = setTimeout(() => {
        slideshowTimer = setInterval(() => nextImage(), interval)
    }, pauseTime)
})
$('.next').on('click', () => {
    if (pauseTimeout) clearTimeout(pauseTimeout)
    clearInterval(slideshowTimer)
    nextImage()
    pauseTimeout = setTimeout(() => {
        slideshowTimer = setInterval(() => nextImage(), interval)
    }, pauseTime)
})
