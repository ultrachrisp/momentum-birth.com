const nav = document.querySelector('.nav');
const logo = document.getElementById('logo');
const homepage = document.querySelector('.homepage');

window.onscroll = function () {
  if (window.scrollY > 10) {
    logo.classList.remove('active');
  } else {
    logo.classList.add('active');
  }

  if (window.scrollY > (homepage.offsetHeight - nav.offsetHeight)) {
    nav.classList.remove('bottom-nav');
    nav.classList.add('top-nav');
  } else {
    nav.classList.add('bottom-nav');
    nav.classList.remove('top-nav');
  }
}
