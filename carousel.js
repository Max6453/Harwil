document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const slides = carousel.children;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    let index = 0;
  
    const updateCarousel = () => {
      const offset = -index * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    };
  
    nextButton.addEventListener('click', () => {
      if (index < slides.length - 1) {
        index++;
      } else {
        index = 0;
      }
      updateCarousel();
    });
  
    prevButton.addEventListener('click', () => {
      if (index > 0) {
        index--;
      } else {
        index = slides.length - 1;
      }
      updateCarousel();
    });
  });