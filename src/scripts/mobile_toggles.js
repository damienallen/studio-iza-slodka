import $ from 'jquery'

$('.toggle-text').each((index, item) => {
    let showToggle = $(item).find('.show-toggle')
    showToggle.click(() => {
        $(item).find('.hide-sm').show()
        showToggle.hide()
    })

    let hideToggle = $(item).find('.hide-toggle')
    hideToggle.click(() => {
        $(item).find('.hide-sm').hide()
        showToggle.show()
    })
})