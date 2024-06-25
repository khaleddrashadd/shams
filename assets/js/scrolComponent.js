export const scrollComponent = () => {
  const buttons = document.querySelectorAll('#scroll-cmp');
  const scrollTopBtn = document.querySelector('#scroll-top');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const target = button.getAttribute('data-target');
      const targetElement = document.querySelector(
        target.padStart(target.length + 1, '#')
      );
      handleScroll(targetElement);
    });
  });

  const handleScroll = (e) => {
    if (!e) return;
    const offset = e.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  };

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY >= 800) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    },
    {
      passive: true,
    }
  );

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};
