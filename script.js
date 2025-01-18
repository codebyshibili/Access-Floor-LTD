const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const cardWidth = slider.querySelector('.card').offsetWidth + 16; // Card width + gap
let scrollAmount = 0;

// Function to slide next
function slideNext() {
  const maxScroll = slider.scrollWidth - slider.offsetWidth;
  if (scrollAmount < maxScroll) {
    scrollAmount += cardWidth;
  } else {
    scrollAmount = 0; // Reset to start
  }
  slider.style.transform = `translateX(-${scrollAmount}px)`;
  updateButtons();
}

// Function to slide previous
function slidePrev() {
  if (scrollAmount > 0) {
    scrollAmount -= cardWidth;
  } else {
    scrollAmount = 0;
  }
  slider.style.transform = `translateX(-${scrollAmount}px)`;
  updateButtons();
}

// Update button states
function updateButtons() {
  prevBtn.disabled = scrollAmount === 0;
  const maxScroll = slider.scrollWidth - slider.offsetWidth;
  nextBtn.disabled = scrollAmount >= maxScroll;
}

// Auto-slide functionality
let autoSlideInterval = setInterval(slideNext, 3000); // Slide every 3 seconds

// Event listeners for manual navigation
nextBtn.addEventListener('click', () => {
  slideNext();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  slidePrev();
  resetAutoSlide();
});

// Reset auto-slide when buttons are clicked
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(slideNext, 3000);
}

// Initialize button states
updateButtons();







document.addEventListener('DOMContentLoaded', () => {
  // Array of background images for each project box
  const backgrounds = [
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("Access-images/p2.jpg")',
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("Access-images/banner bg_11zon.jpg")',
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("Access-images/product-2.jpg")',
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("Access-images/form-image_11zon.png")',
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("Access-images/p1.jpg")',
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("Access-images/African Skies - Neptune.png")'
  ];

  // Select all elements with the class 'project-box'
  const projectBoxes = document.querySelectorAll('.project-box');

  // Loop through each project box and set the background image from the array
  projectBoxes.forEach((box, index) => {
      if (backgrounds[index]) { // Check if there's a background image for this box
          box.style.backgroundImage = backgrounds[index];
      }
  });
});


const cards = document.querySelectorAll('.project-box');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

cards.forEach(card => observer.observe(card));





let counter = 0;

const contentArray = [
  "Transform Your Space <br> with Premium Carpets",
  "Quality and Durability",
  "Functional Access Floors <br> for Every Environment",
  "The Perfect Flooring <br>Experience"
];

const imagesArray = [
  "Access-images/banner-1.jpg",
  "Access-images/banner-2.jpg",
  "Access-images/banner-3.jpg",
  "Access-images/banner-1.jpg"
];

function changeContentAndBackground() {
  // Change background image in nav-banner-container
  const bgUrl = imagesArray[counter];
  document.querySelector('.nav-banner-container').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${bgUrl})`;

  // Change content inside the content-container
  const contentElement = document.getElementById("content");
  contentElement.innerHTML = contentArray[counter];

  // Trigger animation by resetting the class
  contentElement.classList.remove("fade-in");
  void contentElement.offsetWidth; // Force reflow to restart the animation
  contentElement.classList.add("fade-in");

  counter = (counter + 1) % contentArray.length;
}

// Set the interval to update both content and background every 4000ms
setInterval(changeContentAndBackground, 5000);

// Optional: Call it once immediately to see the initial effect
changeContentAndBackground();





