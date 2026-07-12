/*=========================
 Navbar Scroll
=========================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ===========================
   FAQ
=========================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

/* ======================================
   HERO CARD TILT
====================================== */

const card = document.querySelector(".ai-workspace");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;

  const y = e.clientY - rect.top;

  const rotateX = -(y - rect.height / 2) / 18;

  const rotateY = (x - rect.width / 2) / 18;

  card.style.transform = `perspective(1000px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(1.02)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
});
/* ======================================
   COUNTER
====================================== */

const counters = document.querySelectorAll(".stat h2");

const speed = 25;

counters.forEach((counter) => {
  const target = counter.innerText;

  const number = parseInt(target);

  if (isNaN(number)) return;

  counter.innerText = "0";

  let count = 0;

  const update = () => {
    count += Math.ceil(number / speed);

    if (count < number) {
      counter.innerText = count + "+";

      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
});
/* ======================================
   HERO TYPING EFFECT
====================================== */

const words = [
  "Software Engineer",
  "Backend Developer",
  "Full Stack Developer",
  "AI Engineer",
  "SDE at Google",
];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingText.textContent = currentWord.substring(0, charIndex++);

    if (charIndex > currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1800);

      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex--);

    if (charIndex < 0) {
      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) wordIndex = 0;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();
