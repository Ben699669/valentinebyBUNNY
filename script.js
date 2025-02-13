const mainCard = document.getElementById('mainCard');
const loveLetter = document.getElementById('loveLetter');
const yesButton = document.getElementById('yesButton');
const definitelyButton = document.getElementById('definitelyButton');

let definitelyButtonSize = 16; // Initial font size for "Definitely Yes" button

// Handle "Definitely Yes" button click
definitelyButton.addEventListener('click', () => {
  definitelyButtonSize += 2; // Increase font size
  definitelyButton.style.fontSize = `${definitelyButtonSize}px`;

  if (definitelyButtonSize >= 30) {
    definitelyButton.textContent = "💖 Definitely Yes 💖"; // Add hearts to the button
    setTimeout(() => {
      mainCard.classList.add('hidden');
      loveLetter.classList.remove('hidden');
    }, 1000); // Show love letter after 1 second
  }
});

// Handle "Yes" button click
yesButton.addEventListener('click', () => {
  mainCard.classList.add('hidden');
  loveLetter.classList.remove('hidden');
});