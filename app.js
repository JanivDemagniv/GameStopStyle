$(document).ready(() => {
    $('#menu-open').click(() => {
        $('#hidden-menu').css({
            'display': 'block'
        })
        let coverDiv = '<div class="shalom">shalom</div>'
        $('#hidden-menu').after(coverDiv)
    })

    $('#menu-close').click(() => {
        $('#hidden-menu').css({
            'display': 'none'
        })
        $('.shalom').remove()
    })
})