// ============================
// DATA RATING PER BULAN (4 MINGGU)
// ============================
const monthlyData = {
  "January 2026":   [4.2, 4.4, 4.6, 4.5],
  "February 2026": [4.0, 4.1, 4.3, 4.4],
  "March 2026":    [4.3, 4.5, 4.7, 4.6],
  "April 2026":    [4.1, 4.2, 4.4, 4.5],
  "May 2026":      [4.4, 4.6, 4.7, 4.8],
  "June 2026":     [4.5, 4.6, 4.6, 4.7],
  "July 2026":     [4.6, 4.7, 4.8, 4.9],
  "Agustus 2026":  [4.5, 4.6, 4.7, 4.6],
  "September 2026":[4.4, 4.5, 4.6, 4.5],
  "October 2026":  [4.6, 4.7, 4.8, 4.7],
  "November 2026": [4.5, 4.6, 4.6, 4.7],
  "December 2026": [4.7, 4.8, 4.9, 4.9]
};

// ============================
// INIT CHART
// ============================
const ctx = document.getElementById("monthlyChart").getContext("2d");

const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
      data: monthlyData["January 2026"],
      borderColor: "#7b1e1e",
      backgroundColor: "rgba(123, 30, 30, 0.15)",
      tension: 0.45,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: "#7b1e1e"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        min: 4.0,
        max: 5.0,
        ticks: {
          stepSize: 0.2
        }
      }
    }
  }
});

// ============================
// FILTER BULAN → GRAFIK BERUBAH
// ============================
document.getElementById("monthFilter").addEventListener("change", function () {
  const selectedMonth = this.value;
  chart.data.datasets[0].data = monthlyData[selectedMonth];
  chart.update();
});

// ✅ SATU EVENT SAJA
document.querySelector(".download-btn").addEventListener("click", function () {
  const month = document.getElementById("monthFilter").value;
  alert(`Laporan bulan ${month} berhasil diunduh!`);
});

