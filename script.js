// script.js
const messages = document.querySelectorAll('.message');
let currentMessage = 0;

function showNextMessage() {
  if (currentMessage < messages.length) {
    if (currentMessage > 0) {
      messages[currentMessage - 1].style.display = 'none'; // Hide previous message
    }
    messages[currentMessage].style.display = 'block'; // Show current message
    currentMessage++;
  } else {
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('messageContainer').innerHTML += '<div class="message">Your proposal has been sent! Good luck!</div>';
  }
}

document.getElementById('nextBtn').addEventListener('click', showNextMessage);
