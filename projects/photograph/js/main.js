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



  // $(".one-tab-link").on("click", function () {
  //   $(".one-tab-link").removeClass("tab-active");
  //   $(this).addClass("tab-active");

  //   var clickedTitleDataId = $(this).attr("data-id"); //get data-id attribute of clicked title
  //   /*Find tab-content with same data-id attribute like clicked title*/
  //   $(".tabs_content").each(function () {
  //     var tabsContentDataId = $(this).attr("data-id");
  //     if (clickedTitleDataId == tabsContentDataId) {
  //       $(".tabs_content").css({ "z-index": "-1", position: "absolute" });
  //       $(this).css({ "z-index": "1", position: "relative" });
  //     }
  //   });
  // });






  $('.portfolio__slider').slick({
    
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt="стрілка вліво"</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt="стрілка вправо"</button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true
    // asNavFor: '.heroes__slider-wrapp',
  
  });




    
    

  $('.slider-nav .slider-nav__btn').click(function () {
      var $this = $(this);
      $('.portfolio__slider').slick('slickGoTo', $this.data('index'))
  });

  // $('.slide-btn').on('click',function (e) {
  //   e.preventDefault();
  //   $('.slide-btn').removeClass('slide-btn--active');
  //   $(this).addClass('slide-btn--active');

  
  // })




  $('.review__slider').slick({
    dots:false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt="стрілка вліво"</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt="стрілка вправо"</button>'
  })

})