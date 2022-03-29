// Section scroller
const frontFactor = 1
const middleFactor = 0.5
const backFactor = 0.2
const spyOffset = 100

const duration = 50
const throttle = 50

const scrollSection = (scrollTop) => {
    const mazeSection = $('#maze-section')
    const sectionOffset = mazeSection.offset()
    if (sectionOffset) {
        const elementTop = sectionOffset.top
        const elementHeight = mazeSection.height()

        const elementBottom = elementTop + elementHeight
        const scrollBottom = scrollTop + window.innerHeight

        if (scrollBottom > elementTop + spyOffset && scrollTop < elementBottom - spyOffset) {


            const progress = 1 - (elementHeight - Math.min(scrollTop, elementHeight)) / elementHeight
            const elementWidth = $('#maze-section>.spacer').width()
            const leftOffset = progress * (window.innerWidth - elementWidth)

            console.log(Math.min(scrollTop, elementHeight), elementHeight, '>>', progress)

            $('.scroll-text').animate({left: leftOffset * frontFactor}, duration)
            $('.scroll-front').animate({left: leftOffset * frontFactor}, duration)
            $('.scroll-middle').animate({left: leftOffset * middleFactor}, duration)
            $('.scroll-back').animate({left: leftOffset * backFactor}, duration)
        }
    }
}

scrollSection(0)

let time = Date.now()
$(window).scroll((e) => {
    if ((time + throttle - Date.now()) < 0) {
        const scrollTop = $(e.currentTarget).scrollTop()
        scrollSection(scrollTop)

        time = Date.now()
      }
})