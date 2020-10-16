import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}
const ButtonIcon = ({text}: Props) => (
    <button className="btn btn-primary button-content">
        {text}
    </button>
);

export default ButtonIcon;