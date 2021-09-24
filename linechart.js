var xValues = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
var yValues = [3154.8, 1867.4, 2432.9, 2299.8, 1823.2, 2894.5, 2946.3, 2239.5, 3669.6, 3686.9];

new Chart("myChart1", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.5)",
            borderColor: "rgba(255,0,255,0.3)",
            data: yValues
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 4000
                }
            }],
        }
    }
});
chart.render();