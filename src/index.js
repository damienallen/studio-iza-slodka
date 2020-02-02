import 'normalize.css'
import './styles/constants.scss'
import './styles/theme.scss'
import './styles/layout.scss'
import './styles/sidebar.scss'
import './styles/nav.scss'
import './styles/content.scss'

import $ from 'jquery'
import './scripts/slideshow.js'
import './scripts/mobile_toggles.js'
import './scripts/navigation.js'
import './scripts/sidebar.js'
import './scripts/zoom.js'


// Window events
$(window).ready(() => {

  // Fixed cover height on mobile
  if (window.innerWidth < 860) {
    $('.front-cover').css({ height: window.innerHeight });
  }

  const now = new Date()
  console.log(`Loaded at ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}`)
})
