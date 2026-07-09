// FAQ Code
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const answer = question.nextElementSibling;

    const isOpen = answer.classList.contains("active");

    // Sab answers close karo
    faqQuestions.forEach(function (item) {
      item.nextElementSibling.classList.remove("active");
    });

    // Agar ye pehle open nahi tha to open karo
    if (!isOpen) {
      answer.classList.add("active");
    }
  });
});

// Navbar Code
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuToggle.innerHTML = "✖";
  } else {
    menuToggle.innerHTML = "☰";
  }
});
