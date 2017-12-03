$(window).scroll(function () {

    if (Math.round($(window).scrollTop()) > 300) {
        $('.navbar').addClass('navbar-scroll');
    } else  {
        $('.navbar').removeClass('navbar-scroll');
    }

});
