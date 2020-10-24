import React from 'react';
import './styles.scss';
import Chart from 'react-apexcharts';
import { ChartBarData } from '../../../../core/utils/mapChart';

type Props = {
    series: ChartBarData[] | number[] | any;
    title: string;
    options: any;
    width: number;
    height: number;
}

const ChartComponent = ({ series, title, options, width, height }: Props) => {


    return (
        <div className="chart-content ml-3  mt-3 ">
            <div className="d-flex justify-content-center">
                <h3>{title}</h3>
            </div>
            <div className="d-flex justify-content-center">
                <Chart
                    options={options}
                    series={series}
                    type={options.type}
                    width={width}
                    height={height}
                />
            </div>
        </div>
    );
}

export default ChartComponent;