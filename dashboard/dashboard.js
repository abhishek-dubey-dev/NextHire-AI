console.log("Dashboard Loaded Successfully");

const ctx = document.getElementById("progressChart");

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

        tension: 0.4,
      },
    ],
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
