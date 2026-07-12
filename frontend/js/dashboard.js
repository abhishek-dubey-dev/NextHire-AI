const faqQuestions = document.querySelectorAll(".faq-question");

if (faqQuestions.length) {
  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      const answer = question.nextElementSibling;
      const icon = question.querySelector("span");
      const isOpen = answer.classList.contains("active");

      faqQuestions.forEach(function (item) {
        item.nextElementSibling.classList.remove("active");
        const itemIcon = item.querySelector("span");
        if (itemIcon) itemIcon.textContent = "+";
      });

      if (!isOpen) {
        answer.classList.add("active");
        if (icon) icon.textContent = "−";
      }
    });
  });
}

const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const body = document.body;

function closeMobileMenu() {
  if (!navLinks || !menuToggle) return;
  navLinks.classList.remove("show");
  menuToggle.classList.remove("active");
  menuToggle.innerHTML = "☰";
  navLinks.setAttribute("aria-expanded", "false");
  body.classList.remove("menu-open");
}

function openMobileMenu() {
  if (!navLinks || !menuToggle) return;
  navLinks.classList.add("show");
  menuToggle.classList.add("active");
  menuToggle.innerHTML = "✖";
  navLinks.setAttribute("aria-expanded", "true");
  body.classList.add("menu-open");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    if (navLinks.classList.contains("show")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  navItems.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMobileMenu();
    });
  });
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formMessage.textContent =
      "Thanks! Your message has been received. We will contact you soon.";
    formMessage.style.display = "block";
    formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    contactForm.reset();
  });
}
