$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        lazyLoad: 'default', //progressive
        // responsive: [{
        //     breakpoint: 768,
        //     settings: {
        //         slidesToShow: 1
        //     }
        // }, {
        //     breakpoint: 520,
        //     settings: {
        //         slidesToShow: 1
        //     }
        // }]
    });
});
