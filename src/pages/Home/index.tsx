import React from 'react';
import './styles.scss';
import { ReactComponent as MainImage } from '../../core/assets/images/home-image.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        <div className="home-content row m-4">
            <div className="home-text-content col-6">
                <div className="home-text ">
                    <h1>Sistema de <br /> Geoprocessamento</h1>
                    <h6 className="mt-3">Veja os dados atualizados</h6>
                </div>
                <div className="button-content">
                    <Link to="/coordinates">
                        <ButtonIcon text="Acesse os dados atualizados" />
                    </Link>
                </div>
            </div>
            <div className="home-image-content col-6">
                <MainImage className="home-image" />
            </div>
        </div>
    </div>
);

export default Home;