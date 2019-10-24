
// owl-carousel start

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

// owl-carousel end

// custom changes

$('.banner-gallery .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots: true,
    responsive:{
        0:{
            items:1,
        },
        425:{
            items: 1
        },
        768:{
            items: 3,
            loop:false
        },
        992:{
            items: 4,
            loop:false
        }
    }
});



