import 'normalize.css'
import './styles/constants.scss'
import './styles/theme.scss'
import './styles/layout.scss'
import './styles/sidebar.scss'
import './styles/nav.scss'
import './styles/content.scss'

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

// Click zooms
$('.zoom-img').each((index, element) => {
  let height = $(element).height()
  $(element.parentElement).css('height', height)
})
$('.zoom-img').click((e) => {
  $(e.currentTarget).toggleClass('zoom-full')
})

// Hover zooms
const zoomFactor = 3
$('.hover-zoom')
  .on('click', (e) => {
    if ($(e.currentTarget).hasClass('zoomed')) {
      $(e.currentTarget).removeClass('zoomed')
      $(e.currentTarget).children('.bg-image').css({ 'transform': 'scale(1)' });
    } else {
      $(e.currentTarget).addClass('zoomed')
      $(e.currentTarget).children('.bg-image').css({
        'transform-origin': ((e.pageX - $(e.currentTarget).offset().left) / $(e.currentTarget).width()) * 100 + '% ' + ((e.pageY - $(e.currentTarget).offset().top) / $(e.currentTarget).height()) * 100 + '%'
      });
      $(e.currentTarget).children('.bg-image').css({ 'transform': `scale(${zoomFactor})` });
    }
  })
  .on('mousemove', (e) => {
    if ($(e.currentTarget).hasClass('zoomed')) {
      $(e.currentTarget).children('.bg-image').css({
        'transform-origin': ((e.pageX - $(e.currentTarget).offset().left) / $(e.currentTarget).width()) * 100 + '% ' + ((e.pageY - $(e.currentTarget).offset().top) / $(e.currentTarget).height()) * 100 + '%'
      });
    }
  })
  .each((index, element) => {
    $(element)
      .append('<div class="bg-image"></div>')
      .children('.bg-image').css({ 'background-image': 'url(' + $(element).attr('data-image') + ')' });
  })

const adjustDetailMargins = (e) => {
  if (window.matchMedia('(max-width: 860px)').matches) {
    $('.details').each((index, element) => {
      $(element.parentElement).children('.bg-image').css('margin-top', $(element).height() + 20)
    })
  } else {
    $('.bg-image').css('margin-top', 0)
  }
}

// Smooth scrolling
const navHeight = $('#nav-container').outerHeight() + 10
$('nav>a, .to-top').click((e) => {
  e.preventDefault()
  closeNav()

  let sectionId = $(e.currentTarget).attr('href')
  let section = $(sectionId)
  let navOffset = sectionId === '#top' ? 0 : navHeight

  $('html, body').stop().animate({
    scrollTop: section.offset().top - navOffset
  }, 500)
})

// Scroll spy navigation
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
const middleFactor = 0.4
const backFactor = 0.2
const spyOffset = 200

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

// Top arrow hover effect
const duration = 200
$('.logo-container').click((e) => {
  $('html, body').stop().animate({
    scrollTop: 0
  }, 500)
})

$('.logo-container').mouseover(() => {
  $('#top-arrow').stop().animate({ opacity: 1 }, duration)
  $('#logo').stop().animate({ opacity: 0.5 }, duration)
})

$('.logo-container').mouseout(() => {
  $('#top-arrow').stop().animate({ opacity: 0 }, duration)
  $('#logo').stop().animate({ opacity: 1 }, duration)
})

// Window events
$(window).resize((e) => adjustDetailMargins())
$(window).ready((e) => adjustDetailMargins())