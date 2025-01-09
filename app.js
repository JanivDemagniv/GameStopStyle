$(document).ready(() => {
    $('#menu-open').click(() => {
        $('#hidden-menu').css({
            'display': 'block'
        })
        let coverDiv = '<div class="cover-back"></div>'
        $('#hidden-menu').after(coverDiv)
    })

    $('#menu-close').click(() => {
        $('#hidden-menu').css({
            'display': 'none'
        })
        $('.cover-back').remove()
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