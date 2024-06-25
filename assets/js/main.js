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
});
