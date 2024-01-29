const swiper = new Swiper('.reviews__slider', {

  slidesPerView: 2,
  spaceBetween: 22,

  navigation: {
    nextEl: '.reviews__item-next',
    prevEl: '.reviews__item-prev',
  },

});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu--open');
});