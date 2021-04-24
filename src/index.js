import 'normalize.css'
import './styles/constants.scss'
import './styles/footer.scss'
import './styles/layout.scss'
import './styles/sidebar.scss'
import './styles/magnify.scss'
import './styles/nav.scss'
import './styles/news.scss'
import './styles/content.scss'

// import $ from 'jquery'
import './scripts/mobile_toggles.js'
import './scripts/navigation.js'
import './scripts/sidebar.js'


$(window).ready(() => {
  $('.zoom').magnify()
  $('.front-cover').css({ height: window.innerHeight });

  const now = new Date()
  console.log(`Loaded at ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}`)
})
