<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Montserrat:wght@400;600&display=swap"
    rel="stylesheet">
  <link rel="apple-touch-icon" sizes="180x180" href="images/favicons">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png">
  <link rel="manifest" href="images/favicons/site.webmanifest">
  <link rel="mask-icon" href="images/favicons/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#060606">
  <title>Dvortsova Photo</title>
  <link rel="stylesheet" href="css/slick.css">
  <link rel="stylesheet" href="css/jquery.fancybox.min.css">
  <link rel="stylesheet" href="css/style.css">

</head>

<body id="body">
  <header class="header" style="background-image: url('images/banner.jpg');">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__inner">
          <a class="logo" href="#body">
            <img class="logo__img" src="images/logo.svg" alt="Лого">
          </a>

          <nav class="menu">
            <button class="burger" aria-label="меню" type="button">
              <span class="line"></span>
            </button>
            <ul class="menu__list">
              <li class="menu__button-close-modal">
                <button class="menu__btn" type="button">
                  <img class="menu__close" src="images/close.svg" aria-label="закрыть-меню" alt="закрыть">
                </button>
              </li>
              <li class="menu__item">
                <a class="menu__link menu__link--nav" href="#about">Обо мне</a>
              </li>
              <li class="menu__item">
                <a class="menu__link menu__link--nav" href="#portfolio">Портфолио</a>
              </li>
              <li class="menu__item">
                <a class="menu__link menu__link--nav" href="#price">Прайс</a>
              </li>
              <li class="menu__item">
                <a class="menu__link menu__link--nav" href="#review">Отзывы</a>
              </li>
              <li class="menu__item">
                <a class="menu__link menu__link--nav" href="#contact">Контакты</a>
              </li>
              <li class="menu__item">
                <a class="menu__link menu__link--tell" href="tel:+79276072453">+79276072453</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header__box">
          <p class="header__text">
            С любовью к каждому снимку
          </p>
          <h1 class="header__title">
            Свадебный фотограф Дворцова Анастасия
          </h1>
          <button class="header__btn button" type="button" data-fancybox data-src="#hidden-content">
            Записаться на фотосессию
          </button>
          <div class="modal" id="hidden-content">
            <button class="modal__btn" type="button" data-fancybox-close>
              <img src="images/modal.svg" alt="закрыть">
            </button>
            <form class="header__form contacts" action="andriy.privarskiy@gmail.com">
              <label class=" contacts__label" for="name-modal">
                <input class=" contacts__input modal__input" type="text" name="name-modal" id="name-modal"
                  placeholder="Имя">
              </label>
              <label class=" contacts__label" for="tell-modal">
                <input class=" contacts__input modal__input" type="text" name="tell-modal" id="tell-modal"
                  placeholder="Телефон">
              </label>
              <label class=" contacts__label" for="message-modal">
                <textarea class=" contacts__input modal__input  modal__input--area  contacts__input--area"
                  name="message-modal" placeholder="Ваше сообщение" id="message-modal"></textarea>
              </label>
              <button class="contacts__btn button" type="submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
        <ul class="header__social social ">
          <li class="social__item">
            <a class="social__link" href="https://instagram.com/dvortsova.photo?igshid=NTc4MTIwNjQ2YQ=="
              style="background-image: url('images/instagram-icon.svg');" target="_blank"
              aria-label="ссылка на инстаграм">
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="https://t.me/dvortsovaphoto"
              style="background-image: url('images/telegram-icon.svg');" target="_blank"
              aria-label="ссылка на телеграм">
            </a>
          </li>
        </ul>
        <p class="header__text header__text--bottom">
          Отдам свадьбу меньше чем за месяц
        </p>
      </div>
    </div>
  </header>
  <main class="main">
    <section class="about" id="about">
      <div class="container">
        <h2 class="title title--margin">
          Обо мне
        </h2>
        <div class="about__inner">

          <div class="about__img-box">
            <img class="about__image" src="images/about-image-1.jpg" alt="Анастасия Дворцова">
          </div>

          <div class="about__text">
            <div class="about__text-info">
              <h3 class="about__title">
                Привет, я Анастасия – ваш будущий фотограф.
              </h3>
              <p>
                Занимаюсь фотографией более 10 лет и точно знаю, как сделать фотосессию более комфортной и продуктивной.
              </p>
              <p>
                Специализируюсь на свадебной съемке, женском портрете и фотосессиях для беременных.
              </p>
              <h3 class="about__title">
                Чем я могу помочь?
              </h3>
              <ul class="about__list">
                <li class="about__item">
                  Разработка идеи
                </li>
                <li class="about__item">
                  Помощь в выборе одежды и аксессуаров
                </li>
                <li class="about__item">
                  Подбор локации
                </li>
                <li class="about__item">
                  Полное направление в позировании
                </li>
                <li class="about__item">
                  Подготовка необходимого реквизита
                </li>
              </ul>
            </div>
            <div class="about__text-box">
              <p>
                Точно знаю, как сократить бюджет фотосессии без потери качества
              </p>
              <p>
                Вы получите стильные, качественные фотографии, которые будут актуальны ещё долгое время
              </p>
              <p>
                Приятно познакомиться!
              </p>
            </div>
            <img class="about__text-img" src="images/about-image-2.jpg" alt="Анастасия Дворцова">
          </div>
        </div>
      </div>
    </section>
    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="title">
          Портфолио
        </h2>






        <div class="portfolio__slider">

          <div class="portfolio__slide-box portfolio__slide-box--active" data-index="1">
            <div class="portfolio__slider-wrapp">
              <div class="slider-nav ">
                <button class="slide-btn  slide-btn--woman slider-nav__btn slider-nav__btn--big slide-btn--active "
                  type="button" data-index="3">
                  Женский портрет
                </button>

                <button class="slide-btn slide-btn--wedding slider-nav__btn  " type="button" data-index="1">
                  Свадьба
                </button>

                <button class="slide-btn slide-btn--pregnancy slider-nav__btn" data-index="2" type="button">
                  Беременность
                </button>
              </div>
            </div>

            <div class="slide-btn  slide-btn--woman  slide-btn--active slide-txt">
              Женский портрет
            </div>
            <ul class="portfolio__gallary  portfolio__gallary--woman">
              <li class="portfolio__gallary-item portfolio__gallary-item--big">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/1.webp">
                  <picture>
                    <source media="(min-width:601px)" srcset="images/portfolio/1.jpg" type="image/jpeg">
                    <source media="(max-width:600px)" srcset="images/portfolio/1-mobile.jpg" type="image/jpeg">
                    <source media="(max-width:360px)" srcset="images/portfolio/1.jpg" type="image/jpeg">
                    <img class="portfolio__img portfolio__img--big" src="images/portfolio/1.jpg" alt="Девушка в шубе">
                  </picture>
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/2.webp">
                  <img class="portfolio__img" src="images/portfolio/2.jpg" alt="Девушка на полу">
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/3.webp">
                  <img class="portfolio__img" src="images/portfolio/3.jpg" alt="Девушка стоит">
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/4.webp">
                  <img class="portfolio__img" src="images/portfolio/4.jpg" alt="Девушка на шпагате">
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/5.webp">
                  <img class="portfolio__img" src="images/portfolio/5.jpg" alt="Девушка на пуфике">
                </a>

              </li>
            </ul>
          </div>

          <div class="portfolio__slide-box" data-index="2">
            <div class="portfolio__slider-wrapp">
              <div class="slider-nav ">
                <button class="slide-btn  slide-btn--woman slider-nav__btn slider-nav__btn--big " type="button"
                  data-index="3">
                  Женский портрет
                </button>

                <button class="slide-btn slide-btn--wedding slider-nav__btn slide-btn--active " type="button"
                  data-index="1">
                  Свадьба
                </button>

                <button class="slide-btn slide-btn--pregnancy slider-nav__btn" data-index="2" type="button">
                  Беременность
                </button>
              </div>
            </div>
            <div class="slide-btn  slide-btn--woman  slide-btn--active slide-txt">
              Свадьба
            </div>
            <ul class="portfolio__gallary portfolio__gallary--wedding">
              <li class="portfolio__gallary-item portfolio__gallary-item--big" data-fancybox="gallery"
                data-src="images/portfolio/6.jpg">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/6.webp">
                  <picture>
                    <source media="(min-width:601px)" srcset="images/portfolio/6.jpg" type="image/jpeg">
                    <source media="(max-width:600px)" srcset="images/portfolio/portfolio-img/6.webp" type="image/webp">
                    <source media="(max-width:360px)" srcset="images/portfolio/6.jpg" type="image/jpeg">
                    <img class="portfolio__img portfolio__img--big" src="images/portfolio/6.jpg" alt="Девушка в шубе">
                  </picture>
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/7.webp">
                  <img class="portfolio__img" src="images/portfolio/7.jpg" alt="Девушка на полу">
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/8.webp">
                  <img class="portfolio__img" src="images/portfolio/8.jpg" alt="Девушка стоит">
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/9.webp">
                  <img class="portfolio__img" src="images/portfolio/9.jpg" alt="Девушка на шпагате">
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/10.webp">
                  <img class="portfolio__img" src="images/portfolio/10.jpg" alt="Девушка на пуфике">
                </a>

              </li>
            </ul>
          </div>



          <div class="portfolio__slide-box" data-index="3">
            <div class="portfolio__slider-wrapp">
              <div class="slider-nav ">
                <button class="slide-btn  slide-btn--woman slider-nav__btn slider-nav__btn--big " type="button"
                  data-index="3">
                  Женский портрет
                </button>

                <button class="slide-btn slide-btn--wedding slider-nav__btn  " type="button" data-index="1">
                  Свадьба
                </button>

                <button class="slide-btn slide-btn--pregnancy slider-nav__btn slide-btn--active" data-index="2"
                  type="button">
                  Беременность
                </button>
              </div>
            </div>
            <div class="slide-btn  slide-btn--woman  slide-btn--active slide-txt">
              Беременность
            </div>
            <ul class="portfolio__gallary portfolio__gallary--pregnancy">
              <li class="portfolio__gallary-item portfolio__gallary-item--big">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/11.webp">
                  <picture>
                    <source media="(min-width:601px)" srcset="images/portfolio/11.jpg" type="image/jpeg">
                    <source media="(max-width:600px)" srcset="images/portfolio/portfolio-img/11.webp" type="image/webp">
                    <source media="(max-width:360px)" srcset="images/portfolio/11.jpg" type="image/jpeg">
                    <img class="portfolio__img portfolio__img--big" src="images/portfolio/11.jpg" alt="Девушка в шубе">
                  </picture>
                </a>
              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/12.webp">
                  <img class="portfolio__img" src="images/portfolio/12.jpg" alt="Девушка на полу">
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/13.webp">
                  <img class="portfolio__img" src="images/portfolio/13.jpg" alt="Девушка стоит">
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/14.webp">
                  <img class="portfolio__img" src="images/portfolio/14.jpg" alt="Девушка на шпагате">
                </a>

              </li>
              <li class="portfolio__gallary-item">
                <a class="portfolio__link" href="#" data-fancybox data-src="images/portfolio/portfolio-img/15.webp">
                  <img class="portfolio__img" src="images/portfolio/15.jpg" alt="Девушка на пуфике">
                </a>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>




    <section class="price" id="price" style="background-image: url('images/price-bg.jpg');">
      <div class="container">
        <h2 class="title price__title">Прайс</h2>
        <ul class="price__list">
          <li class="price__card">
            <h3 class="price__card-title">
              Пакет «mini»
            </h3>
            <ul class="price__card-list">
              <li class="price__card-item">
                фотосъемка до 3 часов (каждый дополнительный час - 5 000₽)
              </li>
              <li class="price__card-item">
                персональная галерея от 200 фотографий в авторской обработке, активная 1 месяц.
              </li>
              <li class="price__card-item">
                срок отдачи фото - до 2 недель.
              </li>
              <li class="price__card-item">
                помогу с выбором маршрута, локациями, позированием.
              </li>
            </ul>
            <div class="price__item-price">
              15.500 Р
            </div>
            <button class="price__btn" type="button" data-fancybox data-src="#hidden-content">
              Забронировать
            </button>
          </li>
          <li class="price__card">
            <h3 class="price__card-title">
              Пакет «standard»
            </h3>
            <ul class="price__card-list">
              <li class="price__card-item">
                фотосъемка до 8 часов (каждый дополнительный час - 6 000₽)
              </li>
              <li class="price__card-item">
                персональная галерея от 500 фотографий в авторской обработке, активная 1 месяц.
              </li>
              <li class="price__card-item">
                срок отдачи фото - до 1 месяца
              </li>
              <li class="price__card-item">
                в подарок идет коробочка с флешкой и 10 распечатанных фото 10*15
              </li>
            </ul>
            <div class="price__item-price">
              35.000 Р
            </div>
            <button class="price__btn" type="button" data-fancybox data-src="#hidden-content">
              Забронировать
            </button>
          </li>
          <li class="price__card">
            <h3 class="price__card-title">
              Пакет «pro»
            </h3>
            <ul class="price__card-list">
              <li class="price__card-item">
                фотосъемка до 12 часов
              </li>
              <li class="price__card-item">
                персональная галерея от 800 фотографий в авторской обработке, активная 1 месяц.
              </li>
              <li class="price__card-item">
                срок отдачи фото - до 1 месяца.
              </li>
              <li class="price__card-item">
                20-30 фото в течение недели
              </li>
              <li class="price__card-item">
                в подарок идет коробочка с флешкой и 15 распечатанных фото 10*15
              </li>
            </ul>
            <div class="price__item-price">
              50.000 Р
            </div>
            <button class="price__btn" type="button" data-fancybox data-src="#hidden-content">
              Забронировать
            </button>
          </li>
          <li class="price__card">
            <h3 class="price__card-title">
              Женский портрет
            </h3>
            <ul class="price__card-list">
              <li class="price__card-item">
                все удачные фото в цветокоррекции (100+)
              </li>
              <li class="price__card-item">
                20 шт/час в полной ретуши
              </li>
              <li class="price__card-item">
                самостоятельный отбор фото на ретушь
              </li>
              <li class="price__card-item">
                готовность фото – до 2-х недель
              </li>
              <li class="price__card-item">
                помощь в позировании и на всех этапах подготовки к съемке
              </li>
            </ul>
            <div class="price__item-price">
              5.000 Р – 1ч/ 8000 Р – 2ч
            </div>
            <button class="price__btn" type="button" data-fancybox data-src="#hidden-content">
              Забронировать
            </button>
          </li>
        </ul>
      </div>
    </section>
    <section class="review " id="review">
      <div class="container">
        <h2 class="title review__title">
          Отзывы
        </h2>
        <ul class="review__slider">
          <li class="review__item">
            <div class="review__inner">
              <div class="review__content">
                <h3>
                  Кристина и Степан
                </h3>
                <p>
                  Мы с мужем не были довольны свадебными снимками от другого фотографа, Настя предложила поснимать нас к
                  годовщине , я
                  была очень рада, потому что знала что результат будет отличный .Я не волновалась, Настя подсказывала и
                  показывала
                  как
                  нам встать, куда смотреть ,что делать. Было очень легко и круто, фотки как всегда отдала очень быстро
                  и всё было
                  так,
                  как я себе представляла. Безумно красивые кадры. У меня проблемная кожа и даже за это я не переживала
                  огромное
                  спасибо.
                  Насте , она настоящий профессионал своего дела!
                </p>
              </div>
              <img class="review__img" src="images/review/1.jpg" alt="Кристина и Степан">
            </div>
          </li>
          <li class="review__item">
            <div class="review__inner">
              <div class="review__content">
                <h3>
                  Валерия и Денис
                </h3>
                <p>
                  Дорогая Анастасия, мы готовы в тысячный раз признаваться в любви твоему профессионализму, тебе нет
                  равных!При
                  подготовке
                  к свадьбе Настя очень помогла мне своими лайфхаками!
                  Когда Настя скинула тайминг дня, я очень удивилась точности до минуты, и думала, что это будет
                  невозможно, но мы
                  ВЕЗДЕ
                  приезжали чётко по таймингу, это еще раз
                  подтверджает профессионализм! С тобой очень легко, круто, весело и непринуждённо работать, а главное
                  тот результат,
                  который мы получили превзошёл все наши ожидания!
                </p>
              </div>
              <img class="review__img" src="images/review/2.jpg" alt="Валерия и Денис">
            </div>
          </li>
          <li class="review__item">
            <div class="review__inner">
              <div class="review__content">
                <h3>
                  Анна и Максим
                </h3>
                <p>
                  Это был первый опыт съемки для нас обоих,переживала что получится мало хороших фото,но напрасно!
                  Настя–профи,направляла нас в течении всей фотосессии,очень легко и комфортно было работать.
                  Фотографии вышли чудесные,очень тонко и чувственно передала нас,даже не думала,что мы такими можем
                  быть)
                  Мама плакала,когда смотрела)
                  Спасибо огромное за такой труд!Очень хотели бы поработать еще в будущем!
                </p>
              </div>
              <img class="review__img" src="images/review/3.jpg" alt="Анна и Максим">
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="questions">
      <div class="container">
        <div class="questions__inner">
          <h2 class="questions__title title">
            Частые вопросы
          </h2>
          <div class="questions__list-box">
            <ul class="questions__list">
              <li class="questions__item">
                <h3 class="questions__subtitle questions__subtitle--active">
                  Как мы сможем получить фотографии?
                </h3>
                <p class="questions__text">
                  Готовый материал передается в формате JPEG через облачное хранилище в виде персональной галереи. Срок
                  хранения фото 1
                  месяц
                </p>
              </li>
              <li class="questions__item">
                <h3 class="questions__subtitle questions__subtitle--active">
                  Будет ли наша свадьба опубликована в вашем портфолио?
                </h3>
                <p class="questions__text">
                  Безусловно,ваши потрясающие снимки увидят все,но если вдруг,покакой-то причине вы хотите запретить
                  публикацию,то полный
                  запрет стоит 3.000 р.
                </p>
              </li>

              <li class="questions__item">
                <h3 class="questions__subtitle questions__subtitle--active">
                  Как забронировать дату съемки?
                </h3>
                <p class="questions__text">
                  Бронирование осуществяется после предоплаты (женский портрет и Пакет «mini»–500 р,пакеты «standard»и
                  «pro»
                  – 3000
                  р).Полный расчет производится в день съемки.
                </p>
              </li>
            </ul>
            <ul class="questions__list">
              <li class="questions__item">
                <h3 class="questions__subtitle questions__subtitle--active">
                  Будут ли какие-то дополнительные расходы?
                </h3>
                <ul class="questions__text question__text-list">
                  <li class="question__text-item">
                    Ретуш фото сверх пакет +150р/шт
                  </li>
                  <li class="question__text-item">
                    При необходимости локации бронируются и оплачиваются самостоятельно.
                  </li>
                  <li class="question__text-item">
                    Услуги визажиста/стилиста оплачиваются отдельно.
                  </li>
                  <li class="question__text-item">
                    Ускоренная обработка фото + 10.000₽
                  </li>
                </ul>
              </li>
              <li class="questions__item">
                <h3 class="questions__subtitle questions__subtitle--active">
                  Я не знаю что мне надеть.
                </h3>

                <ul class="questions__text question__text-list">
                  <li class="questions__txt">
                    Я помогаю на всех этапах подготовки:
                  </li>
                  <li class="question__text-item">
                    Подбор одежды и аксессуаров.
                  </li>
                  <li class="question__text-item">
                    Помощь с макияжем и укладкой.
                  </li>
                  <li class="question__text-item">
                    Предоставляю ссылки на специалистов и товары
                  </li>
                </ul>
              </li>



              <li class="questions__item">
                <h3 class="questions__subtitle questions__subtitle--active">
                  Заключается ли договор на оказание услуг?
                </h3>
                <p class="questions__text">
                  Да,конечно. Я предоставлю его перед бронированием.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="contact" id="contact">
      <div class="container">
        <h2 class="title contact__title">Свяжитесь со мной</h2>
        <div class="contact__inner">
          <img class="contact__img" src="images/contact-1.jpg" alt="Анастасия Дворцова">
          <form class="contact__form contacts" action="andriy.priavrskiy@gmail.com" name="yourMessage">
            <label class="contacts__label" for="name">
              <input class="contacts__input" type="text" name="name" id="name" placeholder="Имя">
            </label>
            <label class="contacts__label" for="tell">
              <input class="contacts__input" type="text" name="tell" id="tell" placeholder="Телефон">
            </label>
            <label class="contacts__label" for="message">
              <textarea class="contacts__input contacts__input--area" name="message" placeholder="Ваше сообщение"
                id="message"></textarea>
            </label>
            <button class="contacts__btn button" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <a class="logo footer__logo" href="#body">
          <img class="logo__img " src="images/logo.svg" alt="Лого">
        </a>
        <nav class="footer__menu">
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__link" href="#price">
                Прайс
              </a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#portfolio">
                Портфолио
              </a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#review">
                Отзывы
              </a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#about">
                Обо мне
              </a>
            </li>
          </ul>
        </nav>
        <address class="contact-info">
          <ul class="contact-info__list">
            <li class="contact-info__item">
              <a class="contact-info__link" href="mailto:dvortsova.photo@yandex.ru">
                Dvortsova.photo@yandex.ru
              </a>
            </li>
            <li class="contact-info__item">
              <a class="contact-info__link" href="tel:+89276072453">
                89276072453
              </a>
            </li>
          </ul>

          <ul class="footer__social social ">
            <li class="social__item">
              <a class="social__link" href="https://instagram.com/dvortsova.photo?igshid=NTc4MTIwNjQ2YQ=="
                style="background-image: url('images/instagram-icon.svg');" target="_blank"
                aria-label="ссылка на инстаграм">
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="https://t.me/dvortsovaphoto"
                style="background-image: url('images/telegram-icon.svg');" target="_blank"
                aria-label="ссылка на телеграм">
              </a>
            </li>
          </ul>
        </address>
      </div>
    </div>
  </footer>


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  <script src="js/slick.js"></script>
  <script src="js/jquery.fancybox.min.js"></script>
  <script src="js/main.js"></script>
</body>

</html>
