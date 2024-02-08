
$(function () {

  $('.hotel-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/slider-prev.svg" alt="стрілка вліво"</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/slider-next.svg" alt="стрілка вправо"</button>',
    dots: true,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1
        }
      },
    ]

  });

  $('.top-slider__inner').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/slider-left.svg" alt="стрілка вліво"</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/slider-right.svg" alt="стрілка вправо"</button>',
    dots: true,
    fade:true,
    autoplay:true,
    autoplaySpeed: 3000,
  });


  $('select').styler();
  

});