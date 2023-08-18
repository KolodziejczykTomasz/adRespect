window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY <= 50) {
      nav.style.backgroundColor = 'transparent';
    } else {
      nav.style.backgroundColor = '#fff';
      nav.style.opacity = '0.9';
      nav.style.transition = '0.4s ease';
    }