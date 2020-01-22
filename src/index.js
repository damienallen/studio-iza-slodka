import 'normalize.css'
import './styles/constants.scss'
import './styles/theme.scss'
import './styles/layout.scss'
import './styles/sidebar.scss'
import './styles/nav.scss'
import './styles/content.scss'
import './images/makers_maze/idea.png'
import $ from 'jquery'
import './scripts/slideshow.js'
import './scripts/navigation.js'
import './scripts/sidebar.js'
import './scripts/zoom.js'


// Window events
const printMessage = (message, count) => {
  console.log(message)
  if (count > 1) setTimeout(() => printMessage(message, count - 1), 1000)
}
$(window).ready(() => {
  const now = new Date()
  setTimeout(() => {
    printMessage(`Loaded at ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}`, 30)
  }, 1000)
})