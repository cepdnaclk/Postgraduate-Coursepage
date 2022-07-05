$(document).ready(()=>{
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        // autoplay:true,
        autoplaySpeed: 500,
        responsiveClass:true,
        center:true,
        // dots:true,
        nav:true,
        navText:[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })
});