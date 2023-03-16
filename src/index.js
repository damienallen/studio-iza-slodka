import $ from 'jquery'

import 'normalize.css'
import Masonry from 'masonry-layout'
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

    const grid = new Masonry('ul.wp-block-latest-posts', {
        itemSelector: 'ul.wp-block-latest-posts > li',
        columnWidth: 320,
        fitWidth: true,
        gutter: 48,
    })

    grid.masonry()

    const now = new Date()
    console.log(`> Loaded at ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}`)
})
