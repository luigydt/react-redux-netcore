import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCarAsync } from '../../actions/carsActions';

export const CarItem = ({
    idPedido,
    bastidor,
    modelo,
    matricula,
    fechaEntrega }) => {

    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteCarAsync(idPedido));
    }

    return (
        <tr className="table-active text-left">
            <th>{idPedido}</th>
            <td>{bastidor}</td>
            <td>{modelo}</td>
            <td>{matricula}</td>
            <td>{fechaEntrega}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <Link to={`/car?q=${idPedido}`}>Edit </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleDelete}
                        style={{ marginLeft: '100px' }}
                    >X</button>
                </div>
            </td >

        </tr >
    )
}
