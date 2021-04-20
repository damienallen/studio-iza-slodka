import $ from 'jquery'

// Open mobile navigation overlay
const openNav = () => {
    $('#nav-open').hide()
    $('#nav-close').show()
    $('#nav-container').addClass('open')
}

// Close navigation overlay
const closeNav = () => {
    $('#nav-open').show()
    $('#nav-close').hide()
    $('#nav-container').removeClass('open')
}

// Set up navigation onclicks
$('#nav-open').click(openNav)
$('#nav-close').click(closeNav)

// Calculate navigation bar height
let navHeight = 0
const getNavHeight = () => {
    if ($(window).width() < 860) {
        navHeight = $('#sidebar').outerHeight()
    } else {
        navHeight = $('#nav-container').outerHeight()
    }
}
getNavHeight()
$(window).resize(() => getNavHeight())

// Smooth scrolling
$('#top-arrow').click((e) => {
    e.preventDefault()
    closeNav()

    const transition = $(window).width() < 860 ? 0 : 500
    $('html, body').stop().animate({
        scrollTop: 0
    }, transition)
})


// Section scroller
const frontFactor = 1
const middleFactor = 0.5
const backFactor = 0.2
const spyOffset = 100

const scrollSection = (scrollTop) => {
    const elementTop = $('#maze-section').offset().top
    const elementHeight = $('#maze-section').height()

    const elementBottom = elementTop + elementHeight
    const scrollBottom = scrollTop + window.innerHeight
    const scrollDistance = window.innerHeight + elementHeight - spyOffset

    if (scrollBottom > elementTop + spyOffset && scrollTop < elementBottom - spyOffset) {
        const progress = (scrollBottom - elementTop) / scrollDistance
        const elementWidth = $('#maze-section>.spacer').width()
        const leftOffset = progress * (window.innerWidth - elementWidth)

        $('.scroll-text').css('left', leftOffset * frontFactor)
        $('.scroll-front').css('left', leftOffset * frontFactor)
        $('.scroll-middle').css('left', leftOffset * middleFactor)
        $('.scroll-back').css('left', leftOffset * backFactor)
    }
}

scrollSection(0)
$(window).scroll((e) => {
    const scrollTop = $(e.currentTarget).scrollTop()
    scrollSection(scrollTop)
})