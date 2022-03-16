$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    width: 20,
    responsive:{
        0:{
            items:1,
        },
        375:{
            items: 2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:5
        }
    }
})