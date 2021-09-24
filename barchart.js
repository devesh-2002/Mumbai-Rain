var xValues = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
var yValues = [3154.8, 1867.4, 2432.9, 2299.8, 1823.2, 2894.5, 2946.3, 2239.5, 3669.6, 3686.9];

var barColors = ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            label: "Rain in mm"
        }]
    },
    options: {
        scales: {
            y: [{
                scaleLabel: {
                    display: true,
                    text: "Seasonal Mumbai Rain in last Decade (in mm)",
                    label: "Rain in mm"
                },

            }]
        },
    },
});