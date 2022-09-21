$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg" alt="arrow-left"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.svg" alt="arrow-left"/></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});