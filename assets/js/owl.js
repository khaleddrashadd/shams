const handleLinksSlide = () => {
  const links = $('.links__slide-container').owlCarousel({
    loop: true,
    margin: 32,
    // autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsiveClass: true,
    nav: true,
    rtl: false,
    stagePadding: 20,
    navText: [
      "<img src='../img/arrows/left-gray.webp'>",
      "<img src='../img/arrows/right-gray.webp'>",
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
        items: 4,
        nav: true,
      },
    },
  });
};

export default handleLinksSlide;
