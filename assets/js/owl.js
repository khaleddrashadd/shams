const handleLinksSlide = () => {
  const links = $('.links__slide-container').owlCarousel({
    loop: true,
    margin: 32,
    // autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    stagePadding: 20,
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
        nav: true,
      },
      960: {
        items: 3,
        nav: true,
      },
      1140: {
        items: 3,
        nav: true,
      },
    },
  });
};

export default handleLinksSlide;
