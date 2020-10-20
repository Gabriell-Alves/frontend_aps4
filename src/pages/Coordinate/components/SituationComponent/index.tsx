import React from 'react';
import './styles.scss';
import { Situation } from '../../../../core/types/Coordinate';
import { defineSituation } from '../../../../core/utils/situation';

type Props = {
    situation: Situation;
}

const SituationComponent = ({ situation }: Props) => (
    <h5 className={situation}>{defineSituation(situation)}</h5>
);


export default SituationComponent;