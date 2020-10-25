import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Situation } from '../../../core/types/Coordinate';
import { makeRequest } from '../../../core/utils/request';


type FormCoordinate = {
    latitude: string;
    longitude: string;
    situation: Situation;
    urlImage: string;
}


const CreateCoordinate = () => {

    const [form, setForm] = useState<FormCoordinate>({
        latitude: '',
        longitude: '',
        situation: 'PRESERVED',
        urlImage: '',
    });

    useEffect(() => {

    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm(data => ({ ...data, [name]: value }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        makeRequest({method: 'POST', url: '/coordinates', data: form})
            .then(response => setForm({latitude: '', longitude: '', situation: 'PRESERVED', urlImage: ''}));
    }



    return (
        <div className="container">
            <form onSubmit= {handleSubmit}>
                <div className="row create-coordinate-container p-5  mt-5 mb-5">

                    <div className="col-6 pb-5">
                        <h4 className="mb-5 pb-5">CADASTRAR NOVA COORDENADA</h4>
                        <input
                            name="latitude"
                            value={form.latitude}
                            type="number"
                            className="form-control mt-5"
                            placeholder="Latitude"
                            onChange={handleChange}

                        />
                        <input
                            name="longitude"
                            value={form.longitude}
                            type="number"
                            className="form-control mt-5"
                            placeholder="Longitude"
                            onChange={handleChange}
                        />
                        <select
                            name="situation"
                            value={form.situation}
                            className="mt-5 form-control mb-5"
                            onChange={handleChange}
                        >
                            <option value="PRESERVED">Preservada</option>
                            <option value="DEFORESTED">Desmatada</option>
                            <option value="DEFORESTATIONINPROGRESS">Desmatamento em progresso</option>
                            <option value="REFORESTATIONINPROGRESS">Reflorestamento em progresso</option>
                        </select>
                    </div>
                    <div className="col-6 row align-items-end justify-content-center">
                        <div className="image-content mb-4">
                            <img
                                src={form.urlImage}
                                alt=""
                                className="image-layout"
                            />
                        </div>
                        <input
                            name="urlImage"
                            value={form.urlImage}
                            type="text"
                            className="form-control"
                            placeholder="Url da imagem"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row justify-content-end col mt-5">
                        <div className="col-4">
                            <button
                                className="btn btn-outline-danger border-radius-10 mr-3 btn-lg"
                            >
                                CANCELAR
                            </button>
                            <button
                                className="btn btn-primary border-radius-10 btn-lg "
                            >
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