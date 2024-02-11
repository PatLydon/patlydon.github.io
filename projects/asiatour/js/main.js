
$(function () {

  $('.burger, .header__top-box body').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.header__top-box').toggleClass('header__top-box--active');
    $('body').toggleClass('lock');
  });




  $('.hotel-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/slider-prev.svg" alt="стрілка вліво"</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/slider-next.svg" alt="стрілка вправо"</button>',
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]

  });

  $('.top-slider__inner').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/slider-left.svg" alt="стрілка вліво"</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/slider-right.svg" alt="стрілка вправо"</button>',
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
          
         
    //     }
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: {
  
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }

    // ]
  });


  $('select').styler();


});