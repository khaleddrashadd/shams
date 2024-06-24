export const navbarHandler = () => {
  const menuItem = document.querySelectorAll('.header__menu-item');

  menuItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      //close other menu
      menuItem.forEach((item) => {
        if (item !== e.target.closest('.header__menu-item')) {
          item.classList.remove('header__menu-item--active');
        }
      });
      //toggle menu
      const current = e.target.closest('.header__menu-item');
      current.classList.toggle('header__menu-item--active');
    });
  });
};
export const navbarTopHandler = () => {
  const menuItem = document.querySelectorAll('.header-top__menu-item');

  menuItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.header-top__submenu')) return;
      //close other menu
      menuItem.forEach((item) => {
        if (item !== e.target.closest('.header-top__menu-item')) {
          item.classList.remove('header-top__menu-item--active');
        }
      });
      //toggle menu
      const current = e.target.closest('.header-top__menu-item');
      current.classList.toggle('header-top__menu-item--active');
    });
  });
};

export const toggleTopHeaderHandler = () => {
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop < lastScrollTop && window.pageYOffset > 100) {
      document.querySelector('.header-top').classList.add('header-top--show');
    } else {
      document
        .querySelector('.header-top')
        .classList.remove('header-top--show');
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  });
};

export const mobileMenuToggle = () => {
  const menu = document.querySelector('#menu-icon');
  const drawer = document.querySelector('#drawer');
  const closeBtn = document.querySelector('#close-menu');
  const drawerTitle = document.querySelector('.drawer__title');
  menu.addEventListener('click', () => {
    drawer.classList.add('drawer--active');
  });

  closeBtn.addEventListener('click', () => {
    drawer.classList.remove('drawer--active');
    drawerTitle.classList.add('invisible');

    const items = document.querySelectorAll('.drawer__submenu');
    document.querySelector('.drawer__body').classList.remove('hidden');

    items.forEach((e) => {
      e.classList.remove('block');
    });
  });
};
export const mobileSubMenuToggle = () => {
  const drawerItems = document.querySelector('#drawer-items');

  drawerItems.addEventListener('click', (e) => {
    const drawerItem = e.target.closest('.drawer__item');
    const drawerBody = document.querySelector('.drawer__body');
    const id = drawerItem.id;
    const title = document.querySelector('#drawer-title');
    const drawerTitle = document.querySelector('.drawer__title');
    const titleText = drawerItem.querySelector(
      '.drawer__item-title'
    ).textContent;

    function closeAllSubs() {
      title.textContent = '';
      const items = document.querySelectorAll('.drawer__submenu');
      document.querySelector('.drawer__body').classList.remove('hidden');

      items.forEach((e) => {
        e.classList.remove('block');
      });
    }

    if (title) {
      title.addEventListener('click', () => {
        drawerTitle.classList.add('invisible');
        closeAllSubs();
      });
    }
    const giveTitle = () => {
      if (
        Number(id.replace('drawer-', '')) < 7 &&
        Number(id.replace('drawer-', '')) > 0
      ) {
        drawerTitle.classList.remove('invisible');
        title.textContent = titleText;
      }
    };
    switch (id) {
      case 'drawer-1':
        closeAllSubs();
        giveTitle();
        document.querySelector('.drawer__submenu--1').classList.add('block');
        drawerBody.classList.add('hidden');
        break;
      case 'drawer-2':
        closeAllSubs();
        giveTitle();
        document.querySelector('.drawer__submenu--2').classList.add('block');
        drawerBody.classList.add('hidden');

        break;
      case 'drawer-3':
        closeAllSubs();
        giveTitle();
        document.querySelector('.drawer__submenu--3').classList.add('block');
        drawerBody.classList.add('hidden');

        break;
      case 'drawer-4':
        closeAllSubs();
        giveTitle();
        document.querySelector('.drawer__submenu--4').classList.add('block');
        drawerBody.classList.add('hidden');

        break;
      case 'drawer-5':
        closeAllSubs();
        giveTitle();
        document.querySelector('.drawer__submenu--5').classList.add('block');
        drawerBody.classList.add('hidden');

        break;
      case 'drawer-6':
        closeAllSubs();
        giveTitle();
        document.querySelector('.drawer__submenu--6').classList.add('block');
        drawerBody.classList.add('hidden');

        break;
    }
  });
};
