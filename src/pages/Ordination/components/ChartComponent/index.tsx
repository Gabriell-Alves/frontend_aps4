import React from 'react';
import './styles.scss';
import Chart from 'react-apexcharts';
import { ChartBarData } from '../../../../core/utils/mapChart';

type Props = {
    series: ChartBarData[];
    title: string;
    options: any;
}

const ChartComponent = ({series, title, options}: Props) => {


    return (
        <div className="chart-content m-4">
            <div className="d-flex justify-content-center">
                <h3>{title}</h3>
            </div>
            <Chart options={options} series={series} type="bar" width={450} height={250} />
        </div>
    );
}

export default ChartComponent;