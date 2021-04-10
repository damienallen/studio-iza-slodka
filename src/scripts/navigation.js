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

// Scroll spy
let lastId = null
let menuItems = $('nav>a')
let scrollItems = menuItems.map((ind, element) => {
    let item = $($(element).attr('href'))
    if (item.length) { return item }
})

const adjustScrollSpy = (scrollTop) => {

    // Get container scroll position
    const fromTop = scrollTop + navHeight + 10

    // Get id of current section
    let current = scrollItems.map((ind, element) => {
        if ($(element).offset().top < fromTop)
            return element
    })
    current = current[current.length - 1]
    const currentId = current && current.length ? current[0].id : ''

    // Set active class
    if (lastId !== currentId) {
        lastId = currentId
        menuItems.removeClass('active')
        menuItems.filter(`[href='#${currentId}']`).addClass('active')
    }
}


// Section scroller
const frontFactor = 1
const middleFactor = 0.5
const backFactor = 0.2
const spyOffset = 75

const scrollSection = (scrollTop, windowHeight, windowWidth) => {
    const elementTop = $('#maze-section-scroller').offset().top
    const elementHeight = $('#maze-section-scroller').height()

    const elementBottom = elementTop + elementHeight
    const scrollBottom = scrollTop + windowHeight
    const scrollDistance = windowHeight + elementHeight - spyOffset

    if (scrollBottom > elementTop + spyOffset && scrollTop < elementBottom - spyOffset) {
        const progress = (scrollBottom - elementTop) / scrollDistance
        const elementWidth = $('#maze-section-scroller>.spacer').width()
        const leftOffset = progress * (windowWidth - elementWidth)

        $('.scroll-front').css('left', leftOffset * frontFactor)
        $('.scroll-middle').css('left', leftOffset * middleFactor)
        $('.scroll-back').css('left', leftOffset * backFactor)
    }
}

$(window).scroll((e) => {
    const scrollTop = $(e.currentTarget).scrollTop()
    adjustScrollSpy(scrollTop)
    scrollSection(scrollTop, $(e.currentTarget).height(), $(e.currentTarget).width())
})