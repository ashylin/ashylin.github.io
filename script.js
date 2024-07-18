const text = "Hi, I'm Ashley.";
const finalText = "Hi, I'm Ash.";

// Get the element where the text will be typed
const typewriter = document.getElementById('typewriter');

// Simulate typing effect
function typeWriter(text, finalText, idx) {
  if (idx < text.length) {
    typewriter.innerHTML = text.substring(0, idx + 1);
    setTimeout(() => typeWriter(text, finalText, idx + 1), 100); // Adjust typing speed here
  } else {
    // Start backspacing
    setTimeout(() => backspace(text, finalText, idx - 1), 500); // Adjust delay before backspacing
  }
}

// Simulate backspacing effect
function backspace(text, finalText, idx) {
  if (idx >= finalText.length) {
    typewriter.innerHTML = text.substring(0, idx);
    setTimeout(() => backspace(text, finalText, idx - 1), 100); // Adjust backspacing speed here
  } else {
    // Finish animation with final text
    typewriter.innerHTML = finalText;
  }
}

// Start the typing animation
typeWriter(text, finalText, 0);