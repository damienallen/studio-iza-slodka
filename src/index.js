import $ from 'jquery'

import 'normalize.css'
import './styles/constants.scss'
import './styles/footer.scss'
import './styles/layout.scss'
import './styles/nav.scss'
import './styles/news.scss'
import './styles/content.scss'
import './scripts/mobile_toggles.js'
import './scripts/navigation.js'
import './scripts/scroller.js'

$(() => {
    $('.front-cover').css({ height: window.innerHeight })

    const now = new Date()
    console.log(`> Loaded at ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}`)
})
