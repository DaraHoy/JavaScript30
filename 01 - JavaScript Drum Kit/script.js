// Selects all elements with class of key, adds an event listener to remove transition effect after css transformation completes -----------//
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Functions ------------//
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return; //if no key found function ends
  audio.currentTime = 0; //rewinds sound to the start
  audio.play();
  key.classList.add('playing');
}

// Event Listeners ------------------------- //
window.addEventListener('keydown', playSound);
