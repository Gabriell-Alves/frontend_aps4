import React, { useState, useEffect } from 'react';
import ChartComponent from './components/ChartComponent';
import { Ordination as OrdinationSort } from '../../core/types/Ordination';
import { makeRequest } from '../../core/utils/request';
import { mapChartBar } from '../../core/utils/mapChart';
import { ChartBar, } from './components/ChartComponent/optionsCharts';
import Chart from 'react-apexcharts';

const Ordination = () => {

    const [ordinations, setOrdinations] = useState<OrdinationSort[]>();

    useEffect(() => {
        makeRequest({ url: '/ordinations' })
            .then(response => setOrdinations(response.data));
    }, [])


    const state = {
          
        series: [44, 55, 41],
        options: {
          chart: {
            type: 'donut',
          },
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
        },
        
      };
    

    return (
        <div className="ordination-container container">
            {ordinations &&
                <div className="ordination-content-chart-bar row mt-3">
                    <ChartComponent
                        series={mapChartBar(ordinations, "elements100")}
                        title="100"
                        options={ChartBar.options}
                    />
                    <ChartComponent
                        series={mapChartBar(ordinations, "elements1000")}
                        title="1.000"
                        options={ChartBar.options}
                    />
                    <ChartComponent
                        series={mapChartBar(ordinations, "elements10000")}
                        title="10.000"
                        options={ChartBar.options}
                    />
                    <ChartComponent
                        series={mapChartBar(ordinations, "elements100000")}
                        title="100.000"
                        options={ChartBar.options}
                    />
                    <Chart options={state.options} series={state.series} type="donut" />
                </div>
            }
        </div>
    );

}


export default Ordination;