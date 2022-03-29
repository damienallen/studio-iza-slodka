// Section scroller
const spyOffset = 100 // px
const duration = 50 // ms
const throttle = 50 // ms

// const scrollConfig = {
//     text: {
//         start: 0,
//         end: 1.1,
//         direction: -1
//     },
//     front: {
//         start: 0,
//         end: 1.1,
//         direction: -1
//     },
//     middle: {
//         start: 0,
//         end: 1,
//         direction: 1
//     },
//     back: {
//         start: 0.1,
//         end: 2,
//         direction: -1
//     },
// }

const scrollConfig = {
    text: {
        start: 0,
        end: 1.1,
        direction: -1,
    },
    front: {
        start: 0,
        end: 1.1,
        direction: -1,
    },
    middle: {
        start: 0,
        end: 2,
        direction: -1,
    },
    back: {
        start: 0,
        end: 3,
        direction: -1,
    },
}

;(function ($) {
    const scrollSection = (scrollTop) => {
        const mazeSection = $('#maze-section')
        const sectionOffset = mazeSection.offset()

        if (sectionOffset) {
            const elementTop = sectionOffset.top
            const elementHeight = mazeSection.height()

            const elementBottom = elementTop + elementHeight
            const scrollBottom = scrollTop + window.innerHeight

            if (scrollBottom > elementTop + spyOffset && scrollTop < elementBottom - spyOffset) {
                const progress =
                    1 - (elementHeight - Math.min(scrollTop, elementHeight)) / elementHeight
                const elementWidth = $('#maze-section>.spacer').width()
                console.log(elementWidth, '>>', progress)

                for (const [subclass, { start, end, direction }] of Object.entries(scrollConfig)) {
                    const distance = end - start
                    const leftOffset =
                        ((start + distance * progress) * direction * elementWidth) / 3

                    $(`.scroll-${subclass}`).animate({ left: leftOffset }, duration)
                }
            }
        }
    }
    scrollSection(0)

    let time = Date.now()
    $(window).scroll((e) => {
        if (time + throttle - Date.now() < 0) {
            const scrollTop = $(e.currentTarget).scrollTop()
            scrollSection(scrollTop)

            time = Date.now()
        }
    })
})(jQuery)
