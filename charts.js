document.addEventListener('DOMContentLoaded', function() {
    const ctxCPU = document.getElementById('cpuChart').getContext('2d');
    const cpuChart = new Chart(ctxCPU, {
        type: 'bar',
        data: {
            labels: ['Intel Core i9', 'AMD Ryzen 9', 'Intel Core i7', 'AMD Ryzen 7', 'Intel Core i5'],
            datasets: [{
                label: 'Performance Benchmark',
                data: [5000, 4800, 4500, 4300, 4000],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctxGPU = document.getElementById('gpuChart').getContext('2d');
    const gpuChart = new Chart(ctxGPU, {
        type: 'bar',
        data: {
            labels: ['NVIDIA RTX 3080', 'AMD RX 6800 XT', 'NVIDIA RTX 3060', 'AMD RX 6700 XT', 'NVIDIA GTX 1660 Super'],
            datasets: [{
                label: 'Performance Benchmark',
                data: [7000, 6800, 6000, 5800, 5000],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctxRAM = document.getElementById('ramChart').getContext('2d');
    const ramChart = new Chart(ctxRAM, {
        type: 'bar',
        data: {
            labels: ['Corsair Vengeance LPX', 'G.Skill Trident Z', 'Kingston HyperX Fury', 'Crucial Ballistix', 'Patriot Viper Steel'],
            datasets: [{
                label: 'Performance Benchmark',
                data: [3200, 3100, 3000, 2900, 2800],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctxSSD = document.getElementById('ssdChart').getContext('2d');
    const ssdChart = new Chart(ctxSSD, {
        type: 'bar',
        data: {
            labels: ['Samsung 970 EVO', 'WD Black SN750', 'Crucial P1', 'Kingston A2000', 'ADATA XPG SX8200'],
            datasets: [{
                label: 'Performance Benchmark',
                data: [3500, 3400, 3300, 3200, 3100],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
