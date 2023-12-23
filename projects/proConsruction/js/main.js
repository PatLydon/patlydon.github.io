$(function(){


  $('.burger, .menu a , .menu__close').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });

  $('.projects__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow-left.svg" alt="arrow left"</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow-right.svg" alt="arrow down"</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows:false,
          dots: true
        }
      }
    ]
  });

  $('.review__list').slick({
    arrows:false,
    fade: true,
    dots:true,
    autoplay: true,
    slidesToShow: 1
  });



});