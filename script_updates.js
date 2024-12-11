// List of phrases to type
const textArray = [
  "love coding.",
  "am passionate about product management.",
  "thrive to solve problems."
];

let textIndex = 0; // Index of the current text
let charIndex = 0; // Index of the current character
let isDeleting = false; // Whether the effect is deleting text

const dynamicText = document.getElementById("dynamic-text");

// Typing effect with delete animation
function typeWriterEffect() {
  if (isDeleting) {
    // Handle deleting text
    if (charIndex > 0) {
      charIndex--;
      dynamicText.textContent = textArray[textIndex].substring(0, charIndex);
      setTimeout(typeWriterEffect, 50);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length; // Loop back to start
      setTimeout(typeWriterEffect, 500);
    }
  } else {
    // Handle typing effect
    if (charIndex < textArray[textIndex].length) {
      charIndex++;
      dynamicText.textContent = textArray[textIndex].substring(0, charIndex);
      setTimeout(typeWriterEffect, 100);
    } else {
      isDeleting = true;
      setTimeout(typeWriterEffect, 2000);
    }
  }
}

// Function to highlight the active nav link
function highlightNav() {
  const links = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname; // Get current path

  links.forEach(link => {
    // Remove the active class from all nav links first
    link.classList.remove('active');

    // Compare the current URL's path with link.pathname
    if (link.pathname === currentPath) {
      link.classList.add('active');
    }
  });
}


// Call the function when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  highlightNav();
});

// Hamburger Menu Toggle
function toggleNav() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}

// Start the typewriter effect
typeWriterEffect();

// Smooth scroll to the footer when "Contact Me" is clicked
document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.getElementById("contact-link");

  if (contactLink) {
    contactLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default jump
      const footer = document.getElementById("footer");
      
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

let currentIndex = 0; // Start at the first slide
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider-nav .dot");

// Function to show a specific slide
function showSlide(index) {
  currentIndex = index;

  // Ensure index wraps around within bounds
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  // Hide all slides and remove 'active' class from dots
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Show the current slide and activate the corresponding dot
  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

// Auto-slide every 5 seconds
function autoSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

// Event listener for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// Initialize the carousel
showSlide(0); // Show the first slide
setInterval(autoSlide, 5000); // Automatically change slides every 5 seconds

// JavaScript for filtering projects









