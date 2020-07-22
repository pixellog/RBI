$('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
        return $(this).next('.popper-content').html()
    }
});

new Vue({
    el: "#app",
    data: function () {
        return {
            search: 'null',
        }
    }
});

new Vue({
    el: "#modal-detail",
    data: function () {
        return {
            items: {
                Leq: 70.1,
                Lmax: 79.2,
                L10: 73.7,
            }
        }
    }
});

$('#modal-detail').on('shown.bs.modal', function (e) {
    chart();
});


function getRandomInt() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
}

function chart() {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '13:00', '16:00', '19:00', '22:00', '01:00', '04:00', '07:00', '10:00'],
            datasets: [
                {
                    data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()],
                    borderColor: '#d257ff',
                    lineTension: 0,
                    borderWidth: 2,
                    pointRadius: 0,
                    backgroundColor: 'rgb(254, 36, 111, .1)',
                },
                {
                    data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()],
                    borderColor: '#fe246f',
                    lineTension: 0,
                    borderWidth: 2,
                    pointRadius: 0,
                    backgroundColor: 'rgb(254, 36, 111, .1)',
                },
                {
                    data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()],
                    borderColor: '#5d8aff',
                    lineTension: 0,
                    borderWidth: 2,
                    pointRadius: 0,
                    backgroundColor: 'rgb(254, 36, 111, .1)',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#c88293',
                        fontSize: 12,
                        min: 0,
                        max: 100,
                        padding: 10,
                    },
                    gridLines: {
                        color: "#fdced9",
                        lineWidth: 1,
                        drawBorder: 0,
                        zeroLineWidth: 0,
                        drawTicks: false,
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#c88293',
                        fontSize: 12,
                        ticks: {
                            stepSize: 3,
                        }
                    },
                    gridLines: {
                        display: false,
                    },
                }],
                point: [{
                    display: false
                }]
            }
        }
    });
}
