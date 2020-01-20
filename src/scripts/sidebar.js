import $ from 'jquery'

// Top arrow hover effect
const duration = 200
$('.logo-container,.name').click((e) => {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 0)
})

$('.logo-container').mouseover(() => {
    $('#top-arrow').stop().animate({ opacity: 1 }, duration)
    $('#logo').stop().animate({ opacity: 0.5 }, duration)
})

$('.logo-container').mouseout(() => {
    $('#top-arrow').stop().animate({ opacity: 0 }, duration)
    $('#logo').stop().animate({ opacity: 1 }, duration)
})