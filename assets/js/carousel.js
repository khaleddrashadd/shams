export const handleCarouselSlide = () => {
  const carouselImg = new bootstrap.Carousel(
    document.getElementById('hero__banner')
  );
  const carouselCard = document.getElementById('hero__slide');
  carouselCard.addEventListener('slide.bs.carousel', ({ to }) => {
    console.log(to);
    carouselImg.to(to);
  });
};
