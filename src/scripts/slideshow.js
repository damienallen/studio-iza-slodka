import $ from 'jquery'

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

    let slideshowTimer = setInterval(() => nextImage(), interval)
    let pauseTimeout = null

    $(slideshow).find('.prev').on('click', () => {
        if (pauseTimeout) clearTimeout(pauseTimeout)
        clearInterval(slideshowTimer)
        prevImage()
        pauseTimeout = setTimeout(() => {
            slideshowTimer = setInterval(() => nextImage(), interval)
        }, pauseTime)
    })
    $(slideshow).find('.next').on('click', () => {
        if (pauseTimeout) clearTimeout(pauseTimeout)
        clearInterval(slideshowTimer)
        nextImage()
        pauseTimeout = setTimeout(() => {
            slideshowTimer = setInterval(() => nextImage(), interval)
        }, pauseTime)
    })

})
