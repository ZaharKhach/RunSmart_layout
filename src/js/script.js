$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 900,
        prevArrow: ' <button type="button" class="slick-prev"> <img src="../icons/left_arrow.png"/> </button> ',
        nextArrow: ' <button type="button" class="slick-next"> <img src="../icons/right_arrow.png"/> </button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
});