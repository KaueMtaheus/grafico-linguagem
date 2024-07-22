
/*
JavaScript para buscar dados da API do GitHub 
e renderizar um gráfico de barras com Chart.js. 
A função fetchData busca dados sobre repositórios populares e atualiza o gráfico em tempo real.
*/


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
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const fetchData = async () => {
        try {
            const response = await fetch('https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc');
            const data = await response.json();
            const repos = data.items;

            const languageCount = {};

            repos.forEach(repo => {
                const language = repo.language;
                if  (language) {
                    languageCount[language] = (languageCount[language] || 0) + 1;
                }
            });

            const labels = Object.keys(languageCount);
            const values = Object.values(languageCount);

            languageChart.data.labels = labels;
            languageChart.data.datasets[0].data = values;
            languageChart.update();
        } catch (error) {
            console.error('Erro ao buscar dados da API', error);
        }
    };

  fetchData();
  setInterval(fetchData, 60000); // Atualiza a cada 60 segundos
});




