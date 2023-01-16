const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jeremy', 'Haitam', 'Gilles', 'Laurent', 'Céline', 'Facundo', 'Karim', 'Wael', 'Amory', 'Tiffaine', 'Romain', 'Hamza', 'Yanis'],
        datasets: [{
            label: 'Examen du 10/10/22',
            data: [10, 20, 11, 15, 14, 18, 15, 14, 17, 19, 20, 13, 12],
        }, {
            label: 'Examen du 01/12/22',
            data: [13, 10, 12, 14, 18, 9, 18, 15, 18, 16, 10, 15, 16],
        }, {
            label: 'Examen du 13/01/23',
            data: [18, 15, 18, 16, 10, 15, 10, 20, 11, 15, 14, 18, 12],
        }, {
            label: 'Examen du 21/02/23',
            data: [15, 13, 17, 19, 11, 17, 13, 13, 11, 17, 14, 16, 17],
        }, {
            label: 'Examen du 28/03/23',
            data: [13, 13, 11, 17, 14, 16, 19, 20, 13, 12, 10, 20, 11],
        }]
    }
});