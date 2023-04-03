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
$('#nav-open').on('click', openNav)
$('#nav-close').on('click', closeNav)

// Calculate navigation bar height
let navHeight = 0
const getNavHeight = () => {
    if ($(window).width() < 860) {
        navHeight = $('#mobile-logo').outerHeight()
    } else {
        navHeight = $('#nav-container').outerHeight()
    }

    console.log(navHeight)
}

getNavHeight()
$(window).on('resize', () => getNavHeight())
