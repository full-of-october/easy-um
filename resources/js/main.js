
console.log('bootstrap', bootstrap)

const servicesSwiper = new Swiper('.js-services-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    // spaceBetween: 30,
    // noSwiping: true,
    // autoplay: {
    //     disableOnInteraction: true,
    //     pauseOnMouseEnter: true,
    // },
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // breakpoints: {
    //     0: {
    //         slidesPerView: 1
    //     },
    //     //$tablet-width
    //     1200: {
    //         slidesPerView: 'auto',
    //     },
    // }
});

const teamsSwiper = new Swiper('.js-teams-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    mousewheel: {
        forceToAxis: true,
    },
    // slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

});

const feedbackSwiper = new Swiper('.js-feedback-swiper', {
    slidesPerView: 1,
    loop: false,
    draggable: true,
    // spaceBetween: 30,
    // noSwiping: true,
    // autoplay: {
    //     disableOnInteraction: true,
    //     pauseOnMouseEnter: true,
    // },
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    navigation: {
        prevEl: '#prev-feedback',
        nextEl: '#next-feedback',
    },
});

const stepsSwiper = new Swiper('.js-steps-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

const cooperationOptsSwiper = new Swiper('.js-cooperation-options-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

const techSwiper = new Swiper('.js-tech-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach( item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// sticky header
// window.onscroll = function() {toggleHeader()};
// const header = document.querySelector('header');
// window.pageYOffset && header.classList.add('sticky')
// const toggleHeader = () => {
//     window.pageYOffset > 0 ? header.classList.add('sticky') : header.classList.remove('sticky');
// }


// modal
const contactModal = document.getElementById('contact-modal');
const thanksModal = document.getElementById('thanks-modal');
const errorModal = document.getElementById('error-modal');

document.querySelectorAll('.js-contact-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        contactModal.classList.add('active');
    });
});
document.querySelectorAll('.js-thanks-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        thanksModal.classList.add('active');
    });
});
document.querySelectorAll('.js-error-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        errorModal.classList.add('active');
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    });
});
document.querySelectorAll('.js-submit-close').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    });
});
document.querySelectorAll('.modal-overlay').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    });
});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         let block = document.querySelector(this.getAttribute('href'));
//         let headerOffset = document.querySelector('header').offsetHeight;
//         let blockPosition = block.getBoundingClientRect().top;
//         let offsetPosition = blockPosition + window.pageYOffset - headerOffset / 2;

//         // block.scrollIntoView({
//         //     // behavior: 'smooth'
//         // });

//         window.scrollTo(0, offsetPosition);

//         document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');
//     });
// });
// const cart = document.querySelector('.cart');
// document.querySelector('.cart-btn').addEventListener('click', () => {
//     cart.classList.toggle('open');
// });

// document.addEventListener('click', function(event) {
//     if ( cart.classList.contains('open') && event.target !== cart && !cart.contains(event.target) ) {
//         cart.classList.remove('open');
//     }
// });

window.onscroll = () => toggleHeader();
const header = document.querySelector('header');
let sticky = header.offsetTop;

const toggleHeader = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

(function () {
    const parallaxElem = document.querySelectorAll('.figure img');
    Array.prototype.forEach.call(parallaxElem, function (el) {

      let bgPos = {
        x: 1920,
        y: 1080
      };
      const delta = -0.015;
      let reactToTweenUpdate = () => {
        let winW = window.innerWidth / 2;
        let winH = window.innerHeight / 2;
        el.style.top = `${50 - (bgPos.y - winH) * delta}%`;
        el.style.left = `${50 - (bgPos.x - winW) * delta}%`;
      };
      let tween = new TweenMax(bgPos, 0.9, {
        onUpdate: () => reactToTweenUpdate(),
        ease: Power4.easeOut
      });
      const parentSestion = el.closest('section');
      parentSestion.onmousemove = function (event) {
        tween.updateTo(
          {
            x: event.clientX,
            y: event.clientY
          },
          true
        );
      };
    });
})();