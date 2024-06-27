import {
  navbarHandler,
  toggleTopHeaderHandler,
  navbarTopHandler,
  mobileMenuToggle,
  mobileSubMenuToggle,
} from './navbar.js';
import { scrollComponent } from './scrolComponent.js';

document.addEventListener('DOMContentLoaded', () => {
  navbarHandler();
  navbarTopHandler();
  toggleTopHeaderHandler();
  mobileMenuToggle();
  mobileSubMenuToggle();
  scrollComponent();




  const logos = document.querySelectorAll('.partners-logo .logo');
  
  logos.forEach((logo) => {
    logo.addEventListener('mouseenter', () => {
      logos.forEach((otherLogo) => {
        if (otherLogo !== logo) {
          otherLogo.classList.add('dimmed');
        } else {
          otherLogo.classList.add('highlight');
        }
      });
    });
  
    logo.addEventListener('mouseleave', () => {
      logos.forEach((otherLogo) => {
        otherLogo.classList.remove('dimmed');
        otherLogo.classList.remove('highlight');
      });
    });
  });
});



