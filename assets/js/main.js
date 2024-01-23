import handleLinksSlide from'./owl.js'

document.addEventListener('DOMContentLoaded', () => {
  handleToggleMenu();
  handleVideo();

  handleHeaderScroll()
  handleLinksSlide();
});

const handleToggleMenu = () => {
  const menuBtn = document.querySelector('#menu-btn');
  const menu = document.querySelector('#menu');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('header__menu--open');

    if (menuBtn.classList.contains('header__menu--open')) {
      menu.classList.add('header__menu--responsive--open');
    } else {
      menu.classList.remove('header__menu--responsive--open');
    }
  });
};

const handleVideo = () => {
  const introVideo = document.querySelector('#intro-video');
  const barFill = document.querySelector('.video__bar--active');
  if (!introVideo) return;

  introVideo.addEventListener('timeupdate', () => {
    const updatedVideoTime = introVideo.currentTime;
    const videoDuration = introVideo.duration;
    barFill.style.width = `${(updatedVideoTime / videoDuration) * 100}%`;
  });
};

const handleHeaderScroll = () => {
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;
  window.addEventListener('scroll',()=>{
    const scrollPosition = window.scrollY;

    if (scrollPosition >= headerHeight) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  } );
};


  document.addEventListener('DOMContentLoaded', function () {
    var carousel1 = new bootstrap.Carousel(document.getElementById('hero__banner'));
    var carousel2 = new bootstrap.Carousel(document.getElementById('hero__slide'));

   
    document.getElementById('prevBtn').addEventListener('click', function () {
      carousel1.prev();
      carousel2.prev();
    });
    document.getElementById('nextBtn').addEventListener('click', function () {
      carousel1.next();
      carousel2.next();
    });
  });
