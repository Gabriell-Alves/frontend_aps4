import React, { useState, useEffect } from 'react';
import './styles.scss';


const CreateCoordinate = () => {

    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {

    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImgUrl(event.target.value);

    }

    return (
        <div className="container">
            <form>
                <div className="row create-coordinate-container p-5 mt-5">

                    <div className="col-6 pb-5">
                        <h4 className="mb-5 pb-5">CADASTRAR NOVA COORDENADA</h4>
                        <input
                            type="number"
                            className="form-control mt-5"
                            placeholder="Latitude"
                        />
                        <input
                            type="number"
                            className="form-control mt-5"
                            placeholder="Longitude"
                        />
                        <select
                            name="situation"
                            className="mt-5 form-control mb-5"
                        >
                            <option value="1">Preservada</option>
                            <option value="2">Desmatada</option>
                            <option value="3">Desmatamento em progresso</option>
                            <option value="4">Reflorestamento em progresso</option>
                        </select>
                    </div>
                    <div className="col-6 row align-items-end justify-content-center">
                        <div className="image-content mb-4">
                            <img
                                src={imgUrl}
                                alt=""
                                className="image-layout"
                            />
                        </div>
                        <input
                            name="imageUrl"
                            value={imgUrl}
                            type="text"
                            className="form-control"
                            placeholder="Url da imagem"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row justify-content-end col mt-5">
                        <div className="col-4">
                            <button className="btn btn-outline-danger border-radius-10 mr-3 btn-lg">
                                CANCELAR
                    </button>
                            <button className="btn btn-primary border-radius-10 btn-lg ">
                                ADICIONAR
                    </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default CreateCoordinate;