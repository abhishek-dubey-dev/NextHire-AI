const ctx = document.getElementById("progressChart");

if (ctx) {
  new Chart(ctx, {
    type: "line",

    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

      datasets: [
        {
          label: "Study Hours",

          data: [2, 4, 3, 6, 5, 7, 8],

          borderColor: "#2563eb",

          backgroundColor: "rgba(37,99,235,.15)",

          fill: true,

          tension: 0.4,
        },
      ],
    },

    options: {
      plugins: {
        legend: {
          display: false,
        },
      },

      responsive: true,

      maintainAspectRatio: false,
    },
  });
}
