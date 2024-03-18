document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const container = document.querySelector('.carousel-container');

  let currentIndex = 0;
  const comments = document.querySelectorAll('.card');
  const numComments = comments.length;
  const commentWidth = comments[0].offsetWidth;

  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + numComments) % numComments;
    updateCarousel();
  });

  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % numComments;
    updateCarousel();
  });

  function updateCarousel() {
    const offset = -currentIndex * commentWidth;
    container.style.transform = `translateX(${offset}px)`;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const loaderBar = document.querySelector('.loader-bar');
  const loaderPercent = document.querySelector('.loader-percent');
  const loaderWrapper = document.querySelector('.loader-wrapper');
  let width = 0;

  function startLoading() {
      let id = setInterval(progress, 27);

      function progress() {
          if (width >= 100) {
              clearInterval(id);
          } else {
              width++;
              loaderBar.style.width = width + '%';
              loaderPercent.innerText = width + '%';
          }
      }
  }

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              startLoading();
              observer.unobserve(entry.target);
          }
      });
  });

  observer.observe(loaderWrapper);
});

const btnMobile = document.querySelector('.btn-mobile');
const icons = document.querySelector('.icons-socials');
const hamburgers = document.querySelectorAll('.hamburger');

btnMobile.addEventListener('click', () => {
    icons.classList.toggle('active');
    hamburgers.forEach(hamburger => {
        hamburger.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const animatedElements = document.querySelectorAll('.animation');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fadeIn');
          }
      });
  });

  animatedElements.forEach(element => {
      observer.observe(element);
  });
});