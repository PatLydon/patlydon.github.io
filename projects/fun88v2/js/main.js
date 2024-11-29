
const styles = `
@media (max-width: 767px) {
  .main-content__inner {
    max-height: 300px;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .main-content__inner.expanded {
    max-height: 2000px;
  }
}

@media (min-width: 768px) {
  .read-more {
    display: none;
  }
}
`;


const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);


document.addEventListener('DOMContentLoaded', () => {

  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    const content = document.querySelector('.main-content__inner');
    const readMoreBtn = document.querySelector('.read-more');

    if (content && readMoreBtn) {
      let isExpanded = false;

      readMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();

        isExpanded = !isExpanded;
        content.classList.toggle('expanded');
        readMoreBtn.textContent = isExpanded ? 'Read Less' : 'Read More';

        if (!isExpanded) {
          content.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
});


window.addEventListener('resize', () => {
  const content = document.querySelector('.main-content__inner');
  const readMoreBtn = document.querySelector('.read-more');

  if (content && readMoreBtn) {
    if (window.innerWidth >= 768) {

      content.classList.remove('expanded');
      readMoreBtn.style.display = 'none';
    } else {
    
      readMoreBtn.style.display = 'block';
    }
  }
});
