import React from 'react';
import './styles.scss';
import { Coordinate } from '../../../../core/types/Coordinate';
import SituationComponent from '../SituationComponent';


type Props = {
    coordinate: Coordinate;
}

const CardCoordinate = ({ coordinate }: Props) => (
    <div className="card-container row p-3">
        <div className="col-3">
            <img src={coordinate.urlImage} alt="" className="card-image"/>
        </div>
        <div className="col-2">
            <h5>{coordinate.id}</h5>
        </div>
        <div className="col-2">
            <h5>{coordinate.latitude}</h5>
        </div>
        <div className="col-2">
            <h5>{coordinate.longitude}</h5>
        </div>
        <div className="col-3">
            <SituationComponent situation={coordinate.situation}/>
        </div>
    </div>
);

export default CardCoordinate;
