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

function typeWriterEffect() {
  if (isDeleting) {
      // Delete text effect
      if (charIndex > 0) {
          charIndex--;
          dynamicText.textContent = textArray[textIndex].substring(0, charIndex);
          setTimeout(typeWriterEffect, 50);
      } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % textArray.length; // Move to the next phrase
          setTimeout(typeWriterEffect, 500);
      }
  } else {
      // Typing effect
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

// Start the effect
typeWriterEffect();
