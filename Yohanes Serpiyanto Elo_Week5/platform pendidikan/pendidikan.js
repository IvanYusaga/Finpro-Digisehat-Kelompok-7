    // Script untuk mengatur tampilan konten berdasarkan pilihan menu tanpa scroll
    function showContent(section) {
        // Menyembunyikan semua konten
        document.querySelectorAll('.content-section').forEach(function(content) {
            content.style.display = 'none';
        });
        // Menampilkan konten yang dipilih
        document.getElementById(section).style.display = 'block';
    }
    // Script untuk grafik progress
    const ctx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Progress Belajar',
                data: [65, 78, 85, 95],
                borderColor: '#3FA3CE',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Script untuk detail tugas
    function showTaskDetail(taskId) {
        let taskDetails = {
            1: "HTML & CSS Project: Buat halaman web menggunakan HTML dan CSS. Deadline: 10 Okt 2024.",
            2: "JavaScript Basics: Pelajari dasar-dasar JavaScript dan buat aplikasi sederhana. Deadline: 15 Okt 2024.",
            3: "Node.js Server Setup: Siapkan server menggunakan Node.js dan Express. Deadline: 20 Okt 2024.",
            4: "React.js Components: Bangun komponen dengan React.js dan integrasikan API. Deadline: 25 Okt 2024."
        };
        document.getElementById('taskDetailContent').innerText = taskDetails[taskId];
        var myModal = new bootstrap.Modal(document.getElementById('taskDetailModal'));
        myModal.show();
    }

    // Script untuk mengedit tugas (placeholder)
    function editTask(taskId) {
        alert('Fitur edit tugas akan ditambahkan di sini untuk Tugas ID: ' + taskId);
    }

    // Filter tugas
    function filterTasks() {
        const filterValue = document.getElementById('filterTasks').value;
        const rows = document.querySelectorAll('#taskList tr');

        rows.forEach(row => {
            const status = row.querySelector('td:nth-child(2) .badge').textContent.toLowerCase();
            if (filterValue === 'all' || status.includes(filterValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    function filterTasks() {
      const filterValue = document
        .getElementById("filterTasks")
        .value.toLowerCase();
      const rows = document.querySelectorAll("#taskList tr");

      rows.forEach((row) => {
        const status = row
          .querySelector("td:nth-child(2) .badge")
          .textContent.toLowerCase();
        if (filterValue === "all" || status.includes(filterValue)) {
          row.style.display = "table-row"; // Menampilkan row jika sesuai filter
        } else {
          row.style.display = "none"; // Menyembunyikan row jika tidak sesuai filter
        }
      });
    }

    // Menampilkan dashboard sebagai halaman default
    document.addEventListener("DOMContentLoaded", function() {
        showContent('dashboard');
    });
