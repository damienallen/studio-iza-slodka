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

$('#nav-open').click(() => {
  $('#nav-open').hide()
  $('#nav-close').show()
  $('#nav-container').show()
})

$('#nav-close').click(() => {
  $('#nav-open').show()
  $('#nav-close').hide()
  $('#nav-container').hide()
})
