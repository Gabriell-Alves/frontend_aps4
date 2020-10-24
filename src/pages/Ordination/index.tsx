import React, { useState, useEffect } from 'react';
import ChartComponent from './components/ChartComponent';
import { Ordination as OrdinationSort } from '../../core/types/Ordination';
import { makeRequest } from '../../core/utils/request';
import { mapChartBar, mapChartDonut } from '../../core/utils/mapChart';
import { ChartBar, ChartDonut, } from './components/ChartComponent/optionsCharts';
import './styles.scss';


const Ordination = () => {

  const [ordinations, setOrdinations] = useState<OrdinationSort[]>();

  useEffect(() => {
    makeRequest({ url: '/ordinations' })
      .then(response => setOrdinations(response.data));
  }, [])


  return (
    <div className="ordination-container container">
      <div className="row mt-4">
        <div className="col ordination-title-content ml-3 d-flex justify-content-center">
          <h2>Desempenho dos algoritmos em milisegundos </h2>
        </div>
      </div>
      {ordinations &&
        <div className="ordination-content-chart row mt-3">
          <div className="col-8 p-0">
            <ChartComponent
              series={mapChartBar(ordinations, "elements10000")}
              title="10.000"
              options={ChartBar.options}
              height={600}
              width={650}
            />
          </div>
          <div className="col-4 p-0">
            <ChartComponent
              series={mapChartDonut(ordinations, "elements5000").data}
              options={{ ...ChartDonut, labels: mapChartDonut(ordinations, "elements5000").labels }}
              width={250}
              height={150}
              title="5.000"
            />
            <ChartComponent
              series={mapChartDonut(ordinations, "elements1000").data}
              options={{ ...ChartDonut, labels: mapChartDonut(ordinations, "elements1000").labels }}
              width={250}
              height={150}
              title="1.000"
            />
            <ChartComponent
              series={mapChartDonut(ordinations, "elements100").data}
              options={{ ...ChartDonut, labels: mapChartDonut(ordinations, "elements100").labels }}
              width={250}
              height={150}
              title="100"
            />
          </div>
        </div>
      }
    </div>
  );

}


export default Ordination;