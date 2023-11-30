$(function () {
  
  $('.aside__title').on('click', function () {
    $(this).toggleClass('aside__title--active');
    $(this).siblings().slideToggle();
  });

})

