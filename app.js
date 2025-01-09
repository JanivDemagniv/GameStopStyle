$(document).ready(() => {
    $('#menu-open').click(() => {
        $('#hidden-menu').animate({ left: '0' }, 500)
        let coverDiv = '<div class="cover-back"></div>'
        $('#hidden-menu').after(coverDiv)
        $('.cover-back').animate({ opacity: '0.4' }, 500)
    })

    $('#menu-close').click(() => {
        $('#hidden-menu').animate({ left: '-1000' }, 500)
        $('.cover-back').animate({ opacity: '0' }, 500, 'swing', () => {
            $('.cover-back').remove()
        })
    })

    $('#search-bar').focusin(() => {
        $('#search-bar').css({
            'box-shadow': '0 0 5px #000'
        })
    })
    $('#search-bar').focusout(() => {
        $('#search-bar').css({
            'box-shadow': 'none'
        })
    })
})