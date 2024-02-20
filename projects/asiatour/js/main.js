

$(function () {


  $(".tab-content").hide();
  $(".tab-content:first").show();

  $(".info-tabs li").on('click', function () {
    var tabId = $(this).find("a").attr("href");
    $("ul li").removeClass("tab--active");
    $(this).addClass("tab--active");
    $(".tab-content").hide();
    $(tabId).show(); 
  });
  



  $('.accordion__item h4').on('click', function () {
    $(this).toggleClass('h-active');
    $(this).next('.accordion__content').slideToggle();
    $('.accordion__content').not($(this).next()).slideUp();
    $('.accordion__item h4').not($(this)).removeClass('h-active');
  });

  $('.filter_block h3').on('click', function () {
    $(this).toggleClass('h-active');
    $(this).next('.accordion-content').slideToggle();
    $('.accordion-content').not($(this).next()).slideUp();
    $('.filter_block h3').not($(this)).removeClass('h-active');
  });
  $('.hotels__inner-box h3').on('click', function () {
    $(this).toggleClass('h-active');
    $(this).next('.hotels__inner-box ul').slideToggle();
    $('.hotels__inner-box ul').not($(this).next()).slideUp();
    $('.hotels__inner-box h3').not($(this)).removeClass('h-active');
  });


  function closePopupOnEsc(event) {
    if (event.keyCode === 27) {
      $(".popup").fadeOut();
      $("body").removeClass("no-scroll");
    }
  }


  $(".transfer__btn").on('click', function () {
    $(".popup").fadeIn();
    $("body").addClass("no-scroll");
  });


  $(".modal-btn").on('click', function () {
    $(".popup").fadeOut();
    $("body").removeClass("no-scroll");
  });

  $(document).on('keydown', closePopupOnEsc);







  $('#tab1').show();
  $('.tablinks[data-tab="tab1"]').addClass('active');
  $('.tablinks').on('click', function () {
    var tabId = $(this).data('tab');
    $('.tabcontent').hide();
    $('#' + tabId).show();
    $('.tablinks').removeClass('active');
    $(this).addClass('active');
  });




  $('.burger, .header__top-box body').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.header__top-box').toggleClass('header__top-box--active');
    $('body').toggleClass('lock');
  });


  $('.burger--region, .region-page__aside a').on('click', function () {
    $('.burger--region').toggleClass('burger--region-active');
    $('.region-page__aside').toggleClass('region-page__aside--active');
    $('.region-page__aside a').removeClass('region-page__aside--active');
  });




  $('.hotel-slider').slick({
    slidesToShow: 3,
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
    arrows: true,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

});