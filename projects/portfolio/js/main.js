$(function () 

{

  $('.header a, .logo').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });




$('.burger, .menu a').on('click', function () {
  $('.menu').toggleClass('menu--active');
});

var mixer = mixitup('.works__list');
});





// const btn = document.querySelector('.burger');
// const nav = document.querySelector('.menu');

// btn.addEventListener('click', () => {
//   nav.classList.toggle('menu--active');
// });