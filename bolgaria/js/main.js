$("#arrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#advantages").offset().top
    }, 2000);
});

$(document).ready(function(){
    $('.reviews-carousel').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});