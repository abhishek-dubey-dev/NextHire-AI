console.log("Dashboard Loaded Successfully");

const canvas = document.getElementById("progressChart");

if (canvas && typeof Chart !== "undefined") {
  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Study Hours",
          data: [2, 4, 5, 3, 6, 7, 5],
          borderColor: "#2563eb",
          backgroundColor: "rgba(37,99,235,.15)",
          fill: true,
        },
      ],
    },
  });
}

const notification = document.querySelector(".notification");
const notificationMenu = document.querySelector(".notification-menu");
const profile = document.querySelector(".profile");
const profileMenu = document.querySelector(".profile-menu");
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const themeBtn = document.getElementById("theme-toggle");

if (notification && notificationMenu) {
  notification.addEventListener("click", function (event) {
    event.stopPropagation();
    notificationMenu.classList.toggle("show");
  });
}

if (profile && profileMenu) {
  profile.addEventListener("click", function (event) {
    event.stopPropagation();
    profileMenu.classList.toggle("show");
  });
}

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    sidebar.classList.toggle("show");
  });
}

document.addEventListener("click", function (event) {
  if (profile && !profile.contains(event.target)) {
    profileMenu?.classList.remove("show");
  }

  if (notification && !notification.contains(event.target)) {
    notificationMenu?.classList.remove("show");
  }

  if (sidebar && menuToggle && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.classList.remove("show");
  }
});

const toast = document.getElementById("toast");

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

document.querySelectorAll(".action-card").forEach((card) => {
  card.addEventListener("click", () => {
    showToast("Feature coming soon 🚀");
  });
});

const menuItems = document.querySelectorAll(".sidebar-menu li");

menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    menuItems.forEach((li) => {
      li.classList.remove("active");
    });

    item.classList.add("active");
    showToast("This feature is coming soon");
  });
});

document.querySelectorAll(".profile-menu a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(link.textContent.trim() + " is coming soon");
  });
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = +counter.dataset.target;

  let count = 0;

  const update = () => {
    const increment = Math.ceil(target / 60);

    if (count < target) {
      count += increment;

      if (count > target) count = target;

      counter.innerText = count;

      requestAnimationFrame(update);
    }
  };

  update();
});

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");
    if (icon) {
      icon.className = document.body.classList.contains("dark")
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";
    }
  });
}
