var main = document.querySelector('.homepage');
var nav = document.querySelector('.nav');

window.onscroll = function () {
  if (window.scrollY > (main.offsetHeight - nav.offsetHeight)) {
    nav.classList.remove('bottom-nav');
    nav.classList.add('top-nav');
  } else {
    nav.classList.add('bottom-nav');
    nav.classList.remove('top-nav');
  }
}
