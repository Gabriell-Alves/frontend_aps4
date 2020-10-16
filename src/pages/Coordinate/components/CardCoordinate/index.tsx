import React from 'react';
import './styles.scss';
import { ReactComponent as ImageGeo } from '../../../../core/assets/images/home-image.svg'
import { Coordinate } from '../../../../core/types/Coordinate';

type Props = {
    coordinate: Coordinate;
}

const CardCoordinate = ({coordinate}: Props) => (
    <div className="card-container row p-3">
        <div className="col-3">
            <ImageGeo className="card-image"/>
        </div>
        <div className="col-2">
             <h5>{`${coordinate.id}`}</h5>
        </div>
        <div className="col-2">
            <h5>{`${coordinate.latitude}`}</h5>
        </div>
        <div className="col-2">
             <h5>{`${coordinate.longitude}`}</h5>
        </div>
        <div className="col-3">
            <h5>{`${coordinate.situation}`}</h5>
        </div>
    </div>
);

export default CardCoordinate;
