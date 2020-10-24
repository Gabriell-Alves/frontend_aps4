import React, { useEffect, useState } from 'react';
import { makeRequest } from '../../core/utils/request';
import CardCoordinate from './components/CardCoordinate';
import { CoordinateResponse } from '../../core/types/Coordinate';
import './styles.scss'
import Pagination from './components/Pagination';
import InfoLoader from './components/Loaders/InfoLoader';

const Coordinate = () => {

    const [coordinates, setCoordinates] = useState<CoordinateResponse>();
    const [isLoader, setIsLoader] = useState(false);
    const [params, setParams] = useState({
        orderBy: "situation",
        ordination: 3,
        page: 0
    });


    useEffect(() => {
        setIsLoader(true);
        makeRequest({ url: `/coordinates/sort/${params.ordination}`, params: { orderBy: params.orderBy, page: params.page } })
            .then(response => {
                setCoordinates(response.data);
                setIsLoader(false);
            });
    }, [params])

    const handlerOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setParams(data => ({ ...data, [name]: value, page: 0 }));
    }

    return (
        <div className="coordinate-container container">
            {(isLoader &&
                <div>
                    <InfoLoader />
                </div>)
                || (coordinates &&
                    <div>
                        <div className="components-ordination-content row mt-3" >
                            <div className="col-4">
                                <select
                                    name="ordination"
                                    value={params.ordination}
                                    className="btn btn-primary mr-2 btn-lg"
                                    onChange={handlerOnChange}
                                >
                                    <option value="1">Selection Sort</option>
                                    <option value="2">Bubble Sort</option>
                                    <option value="3">Quick Sort</option>
                                </select>
                                <select
                                    name="orderBy"
                                    value={params.orderBy}
                                    className="btn btn-dark btn-lg"
                                    onChange={handlerOnChange}
                                >
                                    <option value="id">Id</option>
                                    <option value="latitude">Latitude</option>
                                    <option value="longitude">Longitude</option>
                                    <option value="situation">Situação</option>
                                </select>
                            </div>
                            <div className="col-1 offset-6">
                                <button type="button" className="btn btn-outline-primary btn-lg">Adicionar</button>
                            </div>
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
                            {coordinates.content.map(item => <CardCoordinate coordinate={item} key={item.id} />)}
                            <Pagination
                                activePage={params.page}
                                totalPages={coordinates.totalPages}
                                onChange={page => setParams({ ...params, page })}
                            />
                        </div>
                    </div>
                )}
        </div>
    );
}


export default Coordinate;