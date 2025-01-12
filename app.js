$(document).ready(() => {
    $('#menu-open').click(() => {
        $('#hidden-menu').animate({ left: '0' }, 500)
        let coverDiv = '<div class="cover-back"></div>'
        $('#hidden-menu').after(coverDiv)
        $('.cover-back').animate({ opacity: '0.5' }, 500)
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

    let currentIndex = 0;
    const images = ['1', '2', '3'];

    // Initialize images
    $('.img-container').append(`<img src='images/1.jpg' class='now' alt="img" id="img1"/>`);
    images.slice(1).forEach((img) => {
        $('.img-container').append(`<img src='images/${img}.jpg' class='next' alt="img" id="img${img}"/>`);
    });

    function showImage(index) {
        $('.img-container img').removeClass('now').addClass('next');
        $(`#img${images[index]}`).removeClass('next').addClass('now');
        $('.next').fadeTo(300, 0)
        $('.now').fadeTo(300, 1)
    }

    $('#btn-slide-left').click(() => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    $('#btn-slide-right').click(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
})
