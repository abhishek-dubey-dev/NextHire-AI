console.log("Dashboard Loaded Successfully");

const canvas = document.getElementById("progressChart");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

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

const notification = document.querySelector(".notification");

const notificationMenu = document.querySelector(".notification-menu");

notification.addEventListener("click", () => {
  notificationMenu.classList.toggle("show");
});

const profile = document.querySelector(".profile");
const profileMenu = document.querySelector(".profile-menu");

profile.addEventListener("click", function () {
  profileMenu.classList.toggle("show");
});

document.addEventListener("click", function (e) {
  if (!profile.contains(e.target)) {
    profileMenu.classList.remove("show");
  }
});

document.querySelectorAll(".action-card").forEach((card) => {
  card.addEventListener("click", () => {
    alert("Feature Coming Soon 🚀");
  });
});

const menuItems = document.querySelectorAll(".sidebar-menu li");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((li) => {
      li.classList.remove("active");
    });

    item.classList.add("active");
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

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});
