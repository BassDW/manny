// Get the necessary elements
const carousel = document.querySelector('.carousel');
const carouselContainer = carousel.querySelector('.carousel-container');
const prevButton = carousel.querySelector('.carousel-prev');
const nextButton = carousel.querySelector('.carousel-next');

// Calculate the width of a single item
const itemWidth = carouselContainer.clientWidth;

// Initialize the current slide index
let currentIndex = 0;

// Move the carousel container to show the desired slide
const moveToSlide = (index) => {
  const position = -index * itemWidth;
  carouselContainer.style.transform = `translateX(${position}px)`;
};

// Handle previous button click
prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  moveToSlide(currentIndex);
});

// Handle next button click
nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, carouselContainer.childElementCount - 1);
  moveToSlide(currentIndex);
});
