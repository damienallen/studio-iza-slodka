import $ from 'jquery'

let slideshowTimer = {}
let pauseTimeout = {}

$('.slideshow').each((index, slideshow) => {

    $(slideshow).find('.slideshow-items > img:gt(0)').hide()
    let items = $(slideshow).find('.slideshow-items')

    const interval = 5000
    const fadeTime = 800
    let pauseTime = 5000

    const nextImage = () => {
        $(items).find('img:first')
            .stop()
            .next()
            .show()
            .end()
            .fadeOut(fadeTime)
            .appendTo(items)
    }

    const prevImage = () => {

        $(items).find('img:first')
            .stop()
            .fadeOut(fadeTime)
            .siblings(':last')
            .prependTo(items)
            .show()
    }

    slideshowTimer[index] = setInterval(() => nextImage(), interval)

    $(slideshow).find('.prev').on('click', () => {
        if (pauseTimeout[index]) clearTimeout(pauseTimeout[index])
        clearInterval(slideshowTimer)
        prevImage()
        pauseTimeout[index] = setTimeout(() => {
            slideshowTimer[index] = setInterval(() => nextImage(), interval)
        }, pauseTime)
    })
    $(slideshow).find('.next').on('click', () => {
        if (pauseTimeout[index]) clearTimeout(pauseTimeout[index])
        clearInterval(slideshowTimer)
        nextImage()
        pauseTimeout[index] = setTimeout(() => {
            slideshowTimer[index] = setInterval(() => nextImage(), interval)
        }, pauseTime)
    })

})

$(window).on('load', () => {
    if (window.innerWidth < 860) {
        let imgHeight = $('.collage-main').find('img').first().outerHeight()
        console.log(imgHeight)
        $('.collage-main').css('height', imgHeight)
    }
})