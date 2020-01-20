import $ from 'jquery'

// Click zooms
$('.zoom-img').each((index, element) => {
    let height = $(element).height()
    $(element.parentElement).css('height', height)
})
$('.zoom-img').click((e) => {
    $(e.currentTarget).toggleClass('zoom-full')
})

// Hover zooms
const zoomFactor = 3
$('.hover-zoom')
    .on('click', (e) => {
        if ($(e.currentTarget).hasClass('zoomed')) {
            $(e.currentTarget).removeClass('zoomed')
            $(e.currentTarget).children('.bg-image').css({ 'transform': 'scale(1)' })
        } else {
            $(e.currentTarget).addClass('zoomed')
            $(e.currentTarget).children('.bg-image').css({
                'transform-origin': ((e.pageX - $(e.currentTarget).offset().left) / $(e.currentTarget).width()) * 100 + '% ' + ((e.pageY - $(e.currentTarget).offset().top) / $(e.currentTarget).height()) * 100 + '%'
            })
            $(e.currentTarget).children('.bg-image').css({ 'transform': `scale(${zoomFactor})` })
        }
    })
    .on('mousemove', (e) => {
        if ($(e.currentTarget).hasClass('zoomed')) {
            $(e.currentTarget).children('.bg-image').css({
                'transform-origin': ((e.pageX - $(e.currentTarget).offset().left) / $(e.currentTarget).width()) * 100 + '% ' + ((e.pageY - $(e.currentTarget).offset().top) / $(e.currentTarget).height()) * 100 + '%'
            })
        }
    })
    .each((index, element) => {
        $(element)
            .append('<div class="bg-image"></div>')
            .children('.bg-image').css({ 'background-image': 'url(' + $(element).attr('data-image') + ')' })
    })