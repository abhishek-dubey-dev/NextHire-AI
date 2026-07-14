const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);

  togglePassword.classList.toggle("fa-eye");

  togglePassword.classList.toggle("fa-eye-slash");
});

const form = document.querySelector(".auth-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]').value.trim();

  const password = document.getElementById("password").value.trim();

  if (email === "") {
    alert("Please enter your email.");

    return;
  }

  if (password === "") {
    alert("Please enter your password.");

    return;
  }

  window.location.href = "dashboard.html";
});

const button = document.querySelector(".login-btn");

button.innerHTML = "Signing In...";

button.disabled = true;

setTimeout(() => {
  window.location.href = "dashboard.html";
}, 1500);
