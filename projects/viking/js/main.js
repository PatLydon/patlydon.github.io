barba.init({
  views: [
    {
      namespace: 'home',
      afterEnter() {
        homePage();
      }
    },
    {
      namespace: 'season-1',
      
      afterEnter() {
        menu();
      }
    },
    {
      namespace: 'season-2',

      afterEnter() {
        menu();
      }
    },
    {
      namespace: 'season-3',

      afterEnter() {
        menu();
      }
    },
    {
      namespace: 'season-4',

      afterEnter() {
        menu();
      }
    },
    {
      namespace: 'season-5',

      afterEnter() {
        menu();
      }
    },
    {
      namespace: 'season-6',

      afterEnter() {
        menu();
      }
    }
  ],

  transitions: [
    {
      name: 'opacity-transition',
      sync: true,
      leave(data) {
        return gsap.timeline().to(data.current.container, {
          opacity: 0
        })
          .fromTo('.box', {
            x: '200%'
          }, {
            x: '-200%'
          }, 0);
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }
  ]
});

function homePage() {
  $(function () {
    $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
    });

    $('.heroes__slider-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.heroes__slider-text',
      prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-left.png" alt="prev"></button>',
      nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-right.png" alt="next"></button>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000
          }
        }
      ]
    });

    $('.heroes__slider-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.heroes__slider-img',
      fade: true,
      arrows: false
    });

    $('[data-fancybox]').fancybox({
      youtube: {
        controls: 0,
        showinfo: 0
      }
    });
  });
}

function menu() {
  $(function () {
    $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
    });
  });
}