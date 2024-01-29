const handleLinksSlide = () => {
  $('.links__slide-container').owlCarousel({
    loop: true,
    margin: 32,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    stagePadding: 0,
    navText: [
      "<i class='fa-solid fa-chevron-right hero__slide-icon links__control links__control--right'></i>",
      "<i class='fa-solid fa-chevron-left hero__slide-icon links__control links__control--left'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
      },
      992: {
        items: 3,
        nav: true,
      },
      
    },
  });
};
export const handleOurProjectsSlide = () => {
  $('.our-projects__container').owlCarousel({
    loop: true,
    margin: 32,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsiveClass: true,
    
    rtl: true,
    stagePadding: 0,
    navText: [
      "<i class='fa-solid fa-chevron-right hero__slide-icon links__control links__control--right'></i>",
      "<i class='fa-solid fa-chevron-left hero__slide-icon links__control links__control--left'></i>",
    ],
    responsive: {
      0: {
        items: 1,
       
      },
      768: {
        items: 2,
       
      },
      992: {
        items: 3,
        
      },
      
    },
  });

var owl = $('.our-projects__container');
owl.owlCarousel();
// Go to the next item
$('#next').click(function () {
  owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('#prev').click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel');
});
};

export default handleLinksSlide;
