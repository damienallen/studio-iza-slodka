import 'normalize.css'
import './styles/constants.scss'
import './styles/footer.scss'
import './styles/layout.scss'
import './styles/sidebar.scss'
import './styles/nav.scss'
import './styles/content.scss'

import $ from 'jquery'
import './scripts/mobile_toggles.js'
import './scripts/navigation.js'
import './scripts/sidebar.js'


const adjustMargins = () => {
  const scrollerWidth = 1.5 * window.innerWidth
  const scrollerHeight = 1862/4000 * scrollerWidth

  const minMargin = 100 
  const marginTop = window.innerHeight - scrollerHeight > minMargin ? 0 : minMargin

  $('.front-cover').css({ height: window.innerHeight, marginTop: marginTop });
  $('#maze-section').css({ top: marginTop });
}

$(window).ready( () => {
  $('.front-cover').css({ height: window.innerHeight });

  const now = new Date()
  console.log(`Loaded at ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}`)
})


// $(window).resize(() => {
//   $('.front-cover').css({ height: window.innerHeight });
// })