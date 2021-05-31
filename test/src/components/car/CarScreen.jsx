import React from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';

export const CarScreen = () => {
    const location = useLocation();
    const { q = '', } = queryString.parse(location.search);

    const state = {
        idPedido: '',
        bastidor: '',
        modelo: '',
        matricula: '',
        fechaEntrega: ''
    }

    const [values, handleInputChange] = useForm({ state });
    let { idPedido,
        bastidor,
        modelo,
        matricula,
        fechaEntrega } = values;
    if (q) {
        //TODO: BUSCAR COCHE Y PONERLO AQUI
        idPedido = q;

    }

    const handleAdd = (e) => {
        e.preventDefault();
        console.log(values);
        console.log('ADD')
        //dispatch. action add
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(values);
        console.log('UPDATE')
        //dispatch. action update
    }

    return (
        <div className='container mt-5'>
            <div className="container mb-3">
                {
                    (q === '')
                    ? <h2>Nuevo Coche</h2>
                    : <h2>Actualizar Coche</h2>

                }
            </div>
            <form onSubmit={handleAdd}>
                <input
                    className="form-control mb-3"
                    type="text"
                    name="idPedido"
                    autoComplete="off"
                    placeholder="Numero de Pedido.."
                    onChange={handleInputChange}
                    value={idPedido}
                ></input>
                <input
                    className="form-control mb-3"
                    type="text"
                    name="bastidor"
                    autoComplete="off"
                    placeholder="Bastidor.."
                    onChange={handleInputChange}
                    value={bastidor}
                ></input>
                <input
                    className="form-control mb-3"
                    type="text"
                    name="modelo"
                    autoComplete="off"
                    placeholder="Modelo.."
                    onChange={handleInputChange}
                    value={modelo}
                ></input>
                <input
                    className="form-control mb-3"
                    type="text"
                    name="matricula"
                    autoComplete="off"
                    placeholder="Matricula.."
                    onChange={handleInputChange}
                    value={matricula}
                ></input>
                <input
                    className="form-control mb-3"
                    type="text"
                    name="fechaEntrega"
                    autoComplete="off"
                    placeholder="Fecha.."
                    onChange={handleInputChange}
                    value={fechaEntrega}
                ></input>
                {
                    (q === '')
                        ?
                        <button
                            type="submit"
                            className="btn m-1 btn-outline-primary"
                            onClick={handleAdd}
                        >
                            Aceptar
                    </button>
                        :
                        <button
                            type="submit"
                            className="btn m-1 btn-outline-primary"
                            onClick={handleUpdate}
                        >
                            Actualizar
                    </button>

                }

            </form>
        </div>
    )
}
