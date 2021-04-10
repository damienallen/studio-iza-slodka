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
$('nav>a, .to-top').click((e) => {
    e.preventDefault()
    closeNav()

    let sectionId = $(e.currentTarget).attr('href')
    let section = $(sectionId)
    let navOffset = sectionId === '#top' ? 0 : navHeight
    let transition = 0
    // let transition = $(window).width() < 860 ? 0 : 500

    $('html, body').stop().animate({
        scrollTop: section.offset().top - navOffset
    }, transition)
})
