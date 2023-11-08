$(function () {

  $('.menu .menu__link--nav, .footer__menu a, .footer__logo').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });



  $('.burger, .menu a , .menu__btn').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });

 



  $('.questions__subtitle').on('click', function () {
    $(this).toggleClass('questions__subtitle--active');
    $(this).siblings().slideToggle();
  });






  $('.portfolio__slider').slick({
    
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt="стрілка вліво"</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt="стрілка вправо"</button>',
    slidesToShow: 1,
    slidesToScroll: 1,
  
  });


    
    

  $('.slider-nav .slider-nav__btn').click(function () {
      var $this = $(this);
      $('.portfolio__slider').slick('slickGoTo', $this.data('index'))
  });

  $('.slide-btn').on('click',function (e) {
    e.preventDefault();
    $('.slide-btn').removeClass('slide-btn--active');
    $(this).addClass('slide-btn--active');

    $('.portfolio__gallary-box').removeClass('portfolio__gallary-box--active');
    $($(this).attr('href')).addClass('portfolio__gallary-box--active');
  })




  $('.review__slider').slick({
    dots:false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt="стрілка вліво"</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt="стрілка вправо"</button>'
  })

})