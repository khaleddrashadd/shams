import {
  navbarHandler,
  toggleTopHeaderHandler,
  navbarTopHandler,
  mobileMenuToggle,
  mobileSubMenuToggle,
} from './navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  navbarHandler();
  navbarTopHandler();
  toggleTopHeaderHandler();
  mobileMenuToggle();
  mobileSubMenuToggle();
});
