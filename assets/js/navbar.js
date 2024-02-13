export const handleNavbarHover = () => {
  const items = document.querySelectorAll('.header__nav-item');

  const sublists = document.querySelectorAll('.header__nav-sub-list');

  const sublistAbout = document.querySelector('.header__nav-sub-list--about');
  const sublistProjects = document.querySelector(
    '.header__nav-sub-list--projects'
  );
  const sublistResearches = document.querySelector(
    '.header__nav-sub-list--researches'
  );
  const sublistParteners = document.querySelector(
    '.header__nav-sub-list--parteners'
  );
  const sublistHiring = document.querySelector(
    '.header__nav-sub-list--hiring'
  );
  const sublistMedia = document.querySelector(
    '.header__nav-sub-list--media'
  );

  items.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.classList.contains('header__nav-item--about')
        ? (sublistAbout.style.display = 'block')
        : '';

      item.classList.contains('header__nav-item--projects')
        ? (sublistProjects.style.display = 'block')
        : '';

      item.classList.contains('header__nav-item--researches')
        ? (sublistResearches.style.display = 'block')
        : '';

      item.classList.contains('header__nav-item--parteners')
        ? (sublistParteners.style.display = 'block')
        : '';

      item.classList.contains('header__nav-item--hiring')
        ? (sublistHiring.style.display = 'block')
        : '';
      item.classList.contains('header__nav-item--media')
        ? (sublistMedia.style.display = 'block')
        : '';
        
    });
  });
  items.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      sublists.forEach((sub) => (sub.style.display = 'none'));
    });
  });

  sublists.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.display = 'block';
    });
  });
  sublists.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      item.style.display = 'none';
    });
  });
};

// const handleHover = (item, sublist) => {
//   item.addEventListener('mouseover', () => {
//     sublistAbout.style.display = 'block';
//   });
//   item.addEventListener('mouseleave', () => {
//     sublistAbout.style.display = 'none';
//   });
//   sublist.addEventListener('mouseover', () => {
//     sublist.style.display = 'block';
//   });
//   sublist.addEventListener('mouseleave', () => {
//     sublist.style.display = 'none';
//   });
// };
