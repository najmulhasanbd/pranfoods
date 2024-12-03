(function ($) {
    "use strict";

    //blog event
    $(document).ready(function () {
        $('.event_active').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            fade: true,
            slidesToScroll: 1,
        });
    });
    //product slide
    $(document).ready(function () {
        $('.product_slid_active').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    });

    //product brand
    $(document).ready(function () {
        $('.product_brand').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: true, // Enables centering of the active slide
            centerPadding: '0px', // Adjust the padding around the center slide
            draggable: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                }
            ]
        });
    });

    // brand clicle

    $('.brand_circle').slick({
        centerMode: true,
        autoplay: true,
        centerPadding: '5px',
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }
        ]
    });






    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa-solid fa-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });



})(jQuery);