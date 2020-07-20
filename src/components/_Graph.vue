<template>
    <div class="p-3">
        <b-row class="justify-content-center custom-alert">
            <div style="width: 2.2rem; height: 2.2rem;" class="center rounded-circle small font-weight-bold mx-2 alert-purple">Leq</div>
            <div style="width: 2.2rem; height: 2.2rem;" class="center rounded-circle small font-weight-bold mx-2 alert-primary">Lmax</div>
            <div style="width: 2.2rem; height: 2.2rem;" class="center rounded-circle small font-weight-bold mx-2 alert-danger">L10</div>
        </b-row>

        <b-row class="my-4">
            <b-col class="text-center text-danger" style="color:#f70059!important;" v-for="(value,key) in items">
                <span class="h5 font-weight-bold">{{key}}</span>
                <div><span class="h1 font-weight-bold">{{value}}</span><span class="h6">dB(A)</span></div>
            </b-col>
        </b-row>

        <div class="graph">
            <chart style="height: 170px;" :chartdata="chartdata" :options="options"/>
        </div>
    </div>
</template>

<script>
    import Chart from "./_Chart";

    export default {
        name: 'Graph',
        components: {Chart},
        data: function () {
            return {
                items: {
                    Leq: 70.1,
                    Lmax: 79.2,
                    L10: 73.7,
                },
                chartdata: {
                    labels: ['','13:00', '16:00', '19:00', '22:00', '01:00', '04:00', '07:00', '10:00'],
                    datasets: [
                        {
                            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                            borderColor: '#d257ff',
                            lineTension: 0,
                            borderWidth: 2,
                            pointRadius: 0,
                            backgroundColor: 'rgb(254, 36, 111, .1)',
                        },
                        {
                            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                            borderColor: '#fe246f',
                            lineTension: 0,
                            borderWidth: 2,
                            pointRadius: 0,
                            backgroundColor: 'rgb(254, 36, 111, .1)',
                        },
                        {
                            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
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
            }
        },
        methods: {
            getRandomInt() {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        }
    }

</script>
