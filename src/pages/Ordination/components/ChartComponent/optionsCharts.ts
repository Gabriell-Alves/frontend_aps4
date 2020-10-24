export const ChartBar = {
    options: {
        chart: {
            id: 'apexchart-example',
            toolbar: {
                show: false,
            }
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: [""],
            labels: {
                show: false,
            }
        },
        colors: ['#33b2df', '#546E7A', '#00BFA6'],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: true,

                barHeight: "70px",
            },
        },
        type: "bar"
    },
}

export const ChartDonut = {
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    legend: {
        show: false,
    },
    tooltip: {
        enabled: true,
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#33b2df', '#546E7A', '#00BFA6'],
    plotOptions: {
        pie: {
            customScale: 1,
            expandOnClick: true,
            dataLabels: {
                offset: 60,
            },
        },
    },
    type: 'donut'
};