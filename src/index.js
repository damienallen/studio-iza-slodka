console.log('Loading stylesheets...')
import 'normalize.css'
import './styles/constants.scss'
import './styles/theme.scss'
import './styles/layout.scss'
import './styles/sidebar.scss'
import './styles/nav.scss'
import './styles/content.scss'

console.log('Initializing JS...')
import $ from 'jquery'

const openNav = () => {
  $('#nav-open').hide()
  $('#nav-close').show()
  $('#nav-container').addClass('open')
}

const closeNav = () => {
  $('#nav-open').show()
  $('#nav-close').hide()
  $('#nav-container').removeClass('open')
}

// Set up onclicks
$('#nav-open').click(openNav)
$('#nav-close').click(closeNav)
$('nav>a').click(closeNav)
console.log($('nav>a'))
