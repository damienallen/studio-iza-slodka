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

// Set up onclicks
$('#nav-open').click(openNav)
$('#nav-close').click(closeNav)

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

$(window).scroll((e) => {
  // Get container scroll position
  let fromTop = $(e.currentTarget).scrollTop() + navHeight + 10

  // Get id of current section
  let current = scrollItems.map((ind, element) => {
    if ($(element).offset().top < fromTop)
      return element
  })
  current = current[current.length - 1]
  let currentId = current && current.length ? current[0].id : ''

  // Set active class
  if (lastId !== currentId) {
    lastId = currentId
    menuItems.removeClass('active')
    menuItems.filter(`[href='#${currentId}']`).addClass('active')
  }
})
