// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Header scroll behavior
// const header = document.querySelector('.header');
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;

//   if (currentScroll <= 0) {
//     header.classList.remove('scroll-up');
//     return;
//   }

//   if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
//     // Scroll Down
//     header.classList.remove('scroll-up');
//     header.classList.add('scroll-down');
//   } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
//     // Scroll Up
//     header.classList.remove('scroll-down');
//     header.classList.add('scroll-up');
//   }
//   lastScroll = currentScroll;
// });

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  });
}

// Mobile menu toggle (to be implemented)
function toggleMobileMenu() {
  const nav = document.querySelector('.nav-list');
  nav.classList.toggle('active');
}

// Initialize any interactive elements when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
});

// Side navigation active section tracking
const sections = document.querySelectorAll('section');
const sideNavItems = document.querySelectorAll('.side-nav-item');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active class from all nav items
      sideNavItems.forEach(item => item.classList.remove('active'));

      // Add active class to current section's nav item
      const activeItem = document.querySelector(`.side-nav-item[data-section="${entry.target.id}"]`);
      if (activeItem) {
        activeItem.classList.add('active');
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerCloseBtn = document.querySelector('.burger-menu__top-link--close');
  const burgerOverlay = document.querySelector('.burger-overlay');
  const wrapperContent = document.querySelector('.wrapper__content');
  const body = document.body;

  // Функція відкриття меню
  const openMenu = () => {
    burgerMenu.classList.add('active');
    burgerOverlay.classList.add('active');
    wrapperContent.classList.add('overlay');
    body.style.overflow = 'hidden';
  };

  // Функція закриття меню
  const closeMenu = () => {
    burgerMenu.classList.remove('active');
    burgerOverlay.classList.remove('active');
    wrapperContent.classList.remove('overlay');
    body.style.overflow = '';
  };

  // Відкриття меню
  burgerBtn.addEventListener('click', openMenu);

  // Закриття меню при кліку на кнопку закриття
  burgerCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
  });

  // Закриття меню при натисканні Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burgerMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  // Отримуємо всі посилання бургер-меню
  const burgerMenuLinks = document.querySelectorAll('.burger-menu__link');

  // Функція закриття бургер-меню
  const closeBurgerMenu = () => {
    burgerMenu.classList.remove('active');
    wrapperContent.classList.remove('overlay');
    body.style.overflow = '';
  };

  // Додаємо обробник для кожного посилання
  burgerMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Зберігаємо стандартну поведінку посилання (перехід до якоря)
      // але додаємо закриття меню
      closeBurgerMenu();
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Отримуємо всі необхідні елементи
  const formBtns = document.querySelectorAll('.form-btn');
  const formBox = document.querySelector('.form-box');
  const formCloseBtn = document.querySelector('.form-box__btn');
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerCloseBtn = document.querySelector('.burger-menu__top-link--close');
  const wrapperContent = document.querySelector('.wrapper__content');

  // Функції для управління оверлеєм
  function addOverlay() {
    if (wrapperContent) {
      wrapperContent.classList.add('overlay');
    }
    if (burgerOverlay) {
      burgerOverlay.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
  }

  function removeOverlay() {
    const isAnyModalOpen = formBox.classList.contains('active') || 
                          burgerMenu.classList.contains('active');
    
    if (!isAnyModalOpen) {
      if (wrapperContent) {
        wrapperContent.classList.remove('overlay');
      }
      if (burgerOverlay) {
        burgerOverlay.classList.remove('active');
      }
      document.body.style.overflow = '';
    }
  }

  // Відкриття/закриття модальної форми
  formBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      formBox.classList.add('active');
      addOverlay();
    });
  });

  if (formCloseBtn) {
    formCloseBtn.addEventListener('click', () => {
      formBox.classList.remove('active');
      removeOverlay();
    });
  }

  // Відкриття/закриття бургер-меню (так само як модальна форма)
  burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.add('active');
    addOverlay();
  });

  burgerCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.remove('active');
    removeOverlay();
  });

  // Закриття по Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (formBox.classList.contains('active')) {
        formBox.classList.remove('active');
        removeOverlay();
      }
      if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        removeOverlay();
      }
    }
  });

  // Обробка відправки форми
  const modalForm = document.getElementById('modal-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(modalForm);
      
      console.log('Відправлені дані:', {
        план: formData.get('selected_plan'),
        ціна: formData.get('selected_price'),
        ім_я: formData.get('name'),
        email: formData.get('email'),
        телефон: formData.get('phone')
      });
      
      // Закриваємо форму
      closeModal(formBox);
      
      // Показуємо блок подяки
      const thankYouBox = document.querySelector('.thank-you-box');
      openModal(thankYouBox);
      
      // Автоматично закриваємо через 3 секунди
      setTimeout(() => {
        closeModal(thankYouBox);
      }, 3000);
      
      // Очищаємо форму
      modalForm.reset();
    });
  }
});

// document.addEventListener('DOMContentLoaded', () => {
//   window.addEventListener('scroll', () => {
//     const advantagesSection = document.querySelector('.advantages');
//     const title = advantagesSection.querySelector('h2');

//     const rect = advantagesSection.getBoundingClientRect();

//     if (rect.top <= 0) {
//       const scrolled = Math.min(Math.abs(rect.top), 300);
//       // title.style.transform = `translateY(${scrolled}px)`;
//     } else {
//       // title.style.transform = 'translateY(0)';
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  // Створюємо observer тільки для секції advantages
  const observer = new IntersectionObserver((entries) => {
    // Перевіряємо кожен entry
    entries.forEach(entry => {
      // Якщо секція видима на 60%
      if (entry.intersectionRatio >= 0.6) {
        console.log('Секція видима на 60%');

        // Знаходимо список всередині секції
        const list = entry.target.querySelector('.advantages__list');

        // Через 3 секунди додаємо клас
        setTimeout(() => {
          list.classList.add('animate');
          console.log('Додали клас animate');
        }, 3000);

        // Припиняємо спостереження
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.6 // Поріг 60%
  });

  // Починаємо спостерігати за секцією
  const advantagesSection = document.querySelector('.advantages');
  observer.observe(advantagesSection);
});

const content = [
  {
    number: "01",
    description: "<span>Відсутність вступного внеску</span>"
  },
  {
    number: "02",
    description: "<span>Професійні інструменти:</span> Турсканер та CRM-система"
  },
  {
    number: "03",
    description: "<span>Раціональна дистанція</span> між офісами"
  },
  {
    number: "04",
    description: "<span>Конкурентні переваги</span> доступу до Біржі заявок та розміщення на Отпуск"
  },
  {
    number: "05",
    description: "<span>Корпоративна пошта</span> vashoffice@travelon.com.ua"
  },
  {
    number: "06",
    description: "<span>Підтримка:</span> куратор, таргетолог, маркетолог, бухгалтер, юрист"
  },
  {
    number: "07",
    description: "<span>Безкоштовне оформлення</span> офісу в єдиному концепті"
  },
  {
    number: "08",
    description: "<span>Сумісне фінансування</span> реклами та розміщення офісу на гугл картах"
  },
  {
    number: "09",
    description: "<span>Власний сайт</span> з пошуком та бронюванням"
  },
  {
    number: "10",
    description: "<span>Брендування сторінок</span> в соцмережах"
  },
  {
    number: "11",
    description: "<span>Закрите професійне</span> тревел-ком'юніті"
  },
  {
    number: "12",
    description: "<span>Брендована продукція</span> з періодичним поповненням"
  },
  {
    number: "13",
    description: "<span>Навчання:</span> семінари, воркшопи, вебінари, тренінги, рекламні тури"
  },
  {
    number: "14",
    description: "<span>Підвищена комісія</span> на тури інших ТО та продукт Тревелон"
  },
  {
    number: "15",
    description: "<span>Доступ до біржі заявок та лідів</span> прямих туристів"
  }
];

const container = document.getElementById('grid-container');
let itemCount = content.length;

function getGridColumns() {
  const width = window.innerWidth;
  if (width <= 768) return 1;
  if (width <= 992) return 2;
  return 3;
}

function createGridItem(item) {
  const div = document.createElement('div');
  div.classList.add('grid-item');

  const numberContainer = document.createElement('div');
  numberContainer.classList.add('reason-number');
  
  // Створюємо елемент з номером (спочатку прихований)
  const numberDiv = document.createElement('div');
  numberDiv.classList.add('number-text');
  numberDiv.textContent = item.number;
  
  // Створюємо картинку (показана по дефолту)
  const icon = document.createElement('img');
  icon.src = `images/reason-${item.number}.svg`;
  icon.alt = `Reason ${item.number}`;
  icon.classList.add('reason-icon');

  numberContainer.appendChild(numberDiv);
  numberContainer.appendChild(icon);

  const descDiv = document.createElement('div');
  descDiv.classList.add('reason-description');
  descDiv.innerHTML = item.description;

  div.appendChild(numberContainer);
  div.appendChild(descDiv);

  return div;
}

function createEmptyItem() {
  const emptyDiv = document.createElement('div');
  emptyDiv.classList.add('grid-item', 'hidden');
  return emptyDiv;
}

function updateGrid() {
  container.innerHTML = '';
  const columns = getGridColumns();

  for (let i = 0; i < itemCount; i++) {
    const item = createGridItem(content[i]);
    container.appendChild(item);

    if (columns === 3) {
      if (i === 0) {
        container.appendChild(createEmptyItem());
        container.appendChild(createEmptyItem());
      } else if (i === 2) {
        container.appendChild(createEmptyItem());
      }
    } else if (columns === 2) {
      if (i === 0) {
        container.appendChild(createEmptyItem());
      }
    }
  }
}

window.addEventListener('resize', updateGrid);
updateGrid();

document.addEventListener('DOMContentLoaded', () => {
  const counterNumber = document.querySelector('.agencies__counter-box-number');
  const images = document.querySelectorAll('.sales-plan__img-bg img');
  let animationStarted = false;

  function animateCounter() {
    const endValue = parseInt(counterNumber.dataset.counterEnd);
    let count = 0;
    
    function formatNumber(num) {
        const digits = num.toString().padStart(4, '0').split('');
        const isFinal = num === endValue;
        
        // Знаходимо позицію першої значущої цифри в кінцевому значенні
        const firstNonZeroIndex = endValue.toString().padStart(4, '0').indexOf(endValue.toString()[0]);
        
        return digits.map((digit, index) => {
            if (!isFinal) {
                return `<span>${digit}</span>`;
            }
            
            // Якщо це кінцеве значення, зафарбовуємо всі цифри після першої значущої
            const shouldBeColored = index >= firstNonZeroIndex;
            return `<span class="${shouldBeColored ? 'finished' : ''}">${digit}</span>`;
        }).join('');
    }
    
    counterNumber.innerHTML = formatNumber(count);
    
    const interval = setInterval(() => {
        count++;
        counterNumber.innerHTML = formatNumber(count);
        
        if (count >= endValue) {
            clearInterval(interval);
        }
    }, 800);
  }

  // Перевіряємо підтримку IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animationStarted) {
          console.log('Element is in viewport'); // Для дебагу
          animationStarted = true;
          animateCounter();
          startImageAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    if (counterNumber) {
      observer.observe(counterNumber);
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.sales-plan__img-bg img');
  
  // Перевіряємо, чи всі картинки знайдені
  console.log('Кількість картинок:', images.length);

  // Початкові стилі
  images.forEach((img, index) => {
    img.style.position = 'absolute';
    img.style.opacity = index === 0 ? '1' : '0';
    img.style.transition = 'opacity 0.5s ease';
  });

  let currentIndex = 1;

  setInterval(() => {
    // Приховуємо всі картинки крім першої
    images.forEach((img, index) => {
      if (index !== 0) {
        img.style.opacity = '0';
      }
    });

    // Показуємо поточну картинку
    if (images[currentIndex]) {
      images[currentIndex].style.opacity = '1';
    }

    // Збільшуємо індекс
    currentIndex++;

    // Якщо дійшли до кінця, починаємо спочатку
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 10,


        navigation: {
          enabled: false
        }
      },

      769: {
        spaceBetween: 20,

        navigation: {
          enabled: true
        }
      },
      992: {
        spaceBetween: 40

        
      }
    },
    on: {
      slideChangeTransitionStart: function () {
        // Приховуємо всі sticky-box
        document.querySelectorAll('.sticky-box').forEach(box => {
          box.style.opacity = '0';
          box.style.transition = 'opacity 0.3s ease';
        });
      },
      slideChangeTransitionEnd: function () {
        // Показуємо sticky-box активного слайду
        const activeSlide = this.slides[this.activeIndex];
        if (activeSlide) {
          const stickyBox = activeSlide.querySelector('.sticky-box');
          if (stickyBox) {
            stickyBox.style.opacity = '1';
          }
        }
      }
    }
  });

  // Функція для оновлення позиції тексту
  function updateStickyText() {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (!activeSlide) return;

    const stickyBox = activeSlide.querySelector('.sticky-box');
    const text = stickyBox?.querySelector('p');
    if (!stickyBox || !text) return;

    const slideRect = activeSlide.getBoundingClientRect();
    const viewportMiddle = window.innerHeight * 0.5;
    const boxTop = slideRect.top + 110;
    const maxOffset = window.innerWidth <= 992 ? 170 : 245;

    if (boxTop <= viewportMiddle) {
      const offset = Math.min(viewportMiddle - boxTop, maxOffset);
      text.style.transform = `translateY(${offset}px)`;
    } else {
      text.style.transform = 'translateY(0)';
    }
  }

  // Додаємо обробники подій
  window.addEventListener('scroll', updateStickyText);
  swiper.on('slideChange', updateStickyText);
  swiper.on('touchEnd', updateStickyText);
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Елемент вважається видимим, якщо його верхня частина у в'юпорті
  return (
    rect.top <= windowHeight * 0.5 &&
    rect.bottom >= windowHeight * 0.5
  );
}

function updateActiveEmoji() {
  // Отримуємо всі секції та навігаційні елементи
  const sections = document.querySelectorAll('section[id], header[id]'); // Додаємо header
  const sideNavItems = document.querySelectorAll('a.side-nav-item'); // Змінюємо селектор
  
  let activeFound = false;
  
  sections.forEach(section => {
    if (isElementInViewport(section) && !activeFound) {
      activeFound = true;
      
      // Спеціальна перевірка для секції sales-plan
      if (section.id === 'sales-plan') {
        const modelsNavItem = document.querySelector('a.side-nav-item[href="#models"]');
        if (modelsNavItem) {
          sideNavItems.forEach(item => item.classList.remove('active'));
          modelsNavItem.classList.add('active');
        }
        return;
      }
      
      // Для всіх інших секцій
      const targetNavItem = document.querySelector(`a.side-nav-item[href="#${section.id}"]`);
      if (targetNavItem) {
        sideNavItems.forEach(item => item.classList.remove('active'));
        targetNavItem.classList.add('active');
      }
    }
  });
  
  // Якщо жодна секція не активна, активуємо першу
  if (!activeFound) {
    const firstNavItem = document.querySelector('a.side-nav-item[href="#hero"]');
    if (firstNavItem) {
      sideNavItems.forEach(item => item.classList.remove('active'));
      firstNavItem.classList.add('active');
    }
  }
}

// Оптимізований обробник скролу
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  
  scrollTimeout = window.requestAnimationFrame(() => {
    updateActiveEmoji();
  });
});

// Ініціалізація при завантаженні
document.addEventListener('DOMContentLoaded', () => {
  updateActiveEmoji();
  
  // Додаємо обробники кліків для емодзі
  document.querySelectorAll('a.side-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Функція для закриття всіх модальних вікон
function closeAllModals() {
  const modals = document.querySelectorAll('.form-box.active, .burger-menu.active');
  const wrapperContent = document.querySelector('.wrapper__content');
  const burgerOverlay = document.querySelector('.burger-overlay');
  const body = document.body;

  modals.forEach(modal => {
    modal.classList.remove('active');
  });

  if (wrapperContent) {
    wrapperContent.classList.remove('overlay');
  }
  if (burgerOverlay) {
    burgerOverlay.classList.remove('active');
  }
  
  // Відновлюємо скрол і прибираємо фільтр
  body.style.overflow = '';
  document.documentElement.style.overflow = '';
  if (wrapperContent) {
    wrapperContent.style.filter = 'none';
  }
}

// Функція закриття модального вікна
function closeModal(modal) {
  if (modal) {
    const wrapperContent = document.querySelector('.wrapper__content');
    const burgerOverlay = document.querySelector('.burger-overlay');
    const body = document.body;
    const formBox = document.querySelector('.form-box');
    const burgerMenu = document.querySelector('.burger-menu');

    modal.classList.remove('active');

    // Перевіряємо, чи всі модальні вікна закриті
    const isAnyModalOpen = formBox?.classList.contains('active') || 
                          burgerMenu?.classList.contains('active');

    if (!isAnyModalOpen) {
      if (wrapperContent) {
        wrapperContent.classList.remove('overlay');
        wrapperContent.style.filter = 'none';
      }
      if (burgerOverlay) {
        burgerOverlay.classList.remove('active');
      }
      // Відновлюємо скрол
      body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }
}

// Функція відкриття модального вікна
function openModal(modal) {
  if (modal) {
    const wrapperContent = document.querySelector('.wrapper__content');
    const burgerOverlay = document.querySelector('.burger-overlay');
    const body = document.body;

    modal.classList.add('active');
    
    if (wrapperContent) {
      wrapperContent.classList.add('overlay');
    }
    if (burgerOverlay) {
      burgerOverlay.classList.add('active');
    }
    
    // Блокуємо скрол
    body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Хедер навігація
  const headerLinks = document.querySelectorAll('.header__menu-link');
  headerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Форма
  const formBtns = document.querySelectorAll('.form-btn');
  const formBox = document.querySelector('.form-box');
  const formCloseBtn = document.querySelector('.form-box__btn');

  formBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(formBox);
    });
  });

  if (formCloseBtn) {
    formCloseBtn.addEventListener('click', () => {
      closeModal(formBox);
    });
  }

  // Бургер меню
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerCloseBtn = document.querySelector('.burger-menu__top-link--close');
  const burgerLinks = document.querySelectorAll('.burger-menu__link');

  if (burgerBtn) {
    burgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(burgerMenu);
    });
  }

  if (burgerCloseBtn) {
    burgerCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal(burgerMenu);
    });
  }

  // Закриття бургер-меню при кліку на посилання
  burgerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        closeModal(burgerMenu);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Єдиний обробник для клавіші Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Обробка відправки форми
  const modalForm = document.getElementById('modal-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(modalForm);
      
      console.log('Відправлені дані:', {
        план: formData.get('selected_plan'),
        ціна: formData.get('selected_price'),
        ім_я: formData.get('name'),
        email: formData.get('email'),
        телефон: formData.get('phone')
      });
      
      closeModal(formBox);
      modalForm.reset();
      // alert('Дякуємо! Ваша заявка прийнята.');
    });
  }
});

// Fixed header visibility on scroll for mobile
document.addEventListener('DOMContentLoaded', () => {
  const fixedHeader = document.querySelector('.fixed-header');
  let lastScrollY = window.scrollY;
  const scrollThreshold = 100; // Show header after 100px of scroll

  function handleScroll() {
    if (window.innerWidth <= 576) {
      if (window.scrollY > scrollThreshold) {
        fixedHeader.classList.add('visible');
      } else {
        fixedHeader.classList.remove('visible');
      }
    }
    lastScrollY = window.scrollY;
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
});

// Add mobile class detection
function checkMobile() {
  if (window.innerWidth <= 576) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.remove('mobile');
  }
}

// Check on load and resize
window.addEventListener('load', checkMobile);
window.addEventListener('resize', checkMobile);
