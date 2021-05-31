import React from 'react'
import { useSelector } from 'react-redux';
import { CarItem } from './CarItem';

export const TableCarsScreen = () => {

    const cars = useSelector(state => state.cars);

    return (
        <table className="table table-dark">
            <tr className="table text-center">
                <td ><b>Pedido</b></td>
                <td ><b>Bastidor</b></td>
                <td ><b>Modelo</b></td>
                <td ><b>Matricula</b></td>
                <td ><b>Fecha Entrega</b> </td>
            </tr>
            <tbody className="table-active text-center">
                {
                    cars.map(car => {
                        return <CarItem key={car.idPedido} {...car} />
                    })
                }
            </tbody>

        </table>
    )
}
