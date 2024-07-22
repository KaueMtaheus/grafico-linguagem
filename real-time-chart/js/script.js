document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('languageChart').getContext('2d');

    const languageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Linguagens de Programação mais Ultilizadas',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        O
    })

})