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

// (function( global ) {
//     var Module =
//         (function() {

//             var data = "secret";
//             return {
//                 scrollTop: 0,
//                 header: document.getElementById('headerImage'),
//                 title: document.getElementById('homeTitle'),
//                 nav: document.getElementById('nav') || null,

//                 setHeight: function( value, elem ) {
//                     return (elem.setAttribute( 'style', 'height:'+value+'px' ));
//                 }
//             };
//   })();

//     global.Module = Module;
//     // Set the initial state
//     if(Module.header){ Module.setHeight(window.innerHeight, Module.header); }
//     if(Module.nav){ Module.nav.classList.remove("active"); }

//     window.addEventListener('scroll', function() {
//         Module.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

//         if(Module.scrollTop >= 5) {
//             if(Module.nav){ Module.nav.classList.add("active"); }
//             Module.title.classList.remove('active');
//         } else {
//             if(Module.nav){ Module.nav.classList.remove("active"); }
//             Module.title.classList.add('active');
//         }

//         return Module.scrollTop;
//     });

// })( this );
