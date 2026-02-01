// ----- Falling Hearts -----
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);


// ----- No Button Logic -----
let messageIndex = 0;

const messages = [
  "Pookie please...",
  "Are you sure? 🥺",
  "Think again!",
  "I will cry...",
  "Don't break my heart 💔",
  "Last chance!"
];

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = (currentSize * 1.4) + "px";
}


// ----- Run Away Effect -----
function runAway() {
  const btn = document.querySelector('.no-button');

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  btn.style.transform = `translate(${x}px, ${y}px)`;
}


// ----- Yes Click -----
function handleYesClick() {
  window.location.href = "yes_page.html";
}

