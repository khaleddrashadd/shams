const handleLinksSlide = () => {
  const links = $('.links__slide-container').owlCarousel({
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
      1140: {
        nav: true,
        items: 4,
      },
    },
  });
};

export default handleLinksSlide;
