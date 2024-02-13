import handleLinksSlide, { handleOurProjectsSlide } from './owl.js';
import { handleCarouselSlide } from './carousel.js';
import {handleNavTabs} from './navTabs.js';
import {handleNavbarHover} from './navbar.js'

document.addEventListener('DOMContentLoaded', () => {
  handleToggleMenu();
  handleVideo();

  handleHeaderScroll();
  handleLinksSlide();
  handleCarouselSlide();
  handleOurProjectsSlide();
handleNavbarHover();
  handleNavTabs();









  function updateProgress() {
    const progressBar = document.querySelector('.progress-bar');

    // Set the desired progress value (between 0 and 100)
    const progressValue = 100;

    // Calculate the rotation angle based on the progress value
    const rotationAngle = (progressValue / 100) * 360;

    // Apply the rotation to the progress bar
    progressBar.style.transform = `rotate(${rotationAngle}deg)`;
  }





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
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= headerHeight) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
};
