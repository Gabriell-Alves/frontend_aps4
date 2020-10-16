import React, { useEffect, useState } from 'react';
import { makeRequest } from '../../core/utils/request';
import CardCoordinate from './components/CardCoordinate';
import { CoordinateResponse } from '../../core/types/Coordinate';
import './styles.scss'

const Coordinate = () => {

    const [coordinates, setCoordinates] = useState<CoordinateResponse>();

    useEffect(() => {
        makeRequest({ url: '/coordinates' })
            .then(response => setCoordinates(response.data));
    }, [])

    return (
        <div className="coordinate-container pl-5">
            <div className="components-ordination-content row m-3">
                <button className="btn btn-secondary ">Quick Sort</button>
                <button className="btn btn-primary ml-1">Selection Sort</button>
                <button className="btn btn-dark ml-1">Bubble Sort</button>
            </div>
            <div className=" mr-5">
                <div className="coordinate-items-header row p-3">
                    <div className="col-3">
                        <h5>Imagem</h5>
                    </div>
                    <div className="col-2">
                        <h5>Id</h5>
                    </div>
                    <div className="col-2">
                        <h5>Latitude</h5>
                    </div>
                    <div className="col-2">
                        <h5>Longitude</h5>
                    </div>
                    <div className="col-3">
                        <h5>Situação</h5>
                    </div>
                </div>
            </div>
            <div className="coordinate-items-content  mr-5">
                {coordinates && coordinates.content.map(item =>
                    <CardCoordinate coordinate={item} key={item.id} />)}
            </div>
        </div>
    );

}


export default Coordinate;