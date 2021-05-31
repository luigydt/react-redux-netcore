import { types } from "../types/types"
import axios from 'axios';
import { cars } from "../helpers/loadCars";


export const deleteCarAsync = (idPedido) => {
    return (dispatch) => {

        axios({
            method: 'delete',
            url: `https://localhost:44352/api/cars/${idPedido}`
        });

        dispatch(newStateCars(cars))
    }
}

export const updateCarAsync = (...car) => {
    return (dispatch) => {

        axios({
            method: 'put',
            url: `https://localhost:44352/api/cars`,
            headers: {},
            data: {
                ...car
            }
        });

        dispatch(newStateCars(cars))
    }
}

export const insertCarAsync = (...car) => {
    return (dispatch) => {

        axios({
            method: 'post',
            url: `https://localhost:44352/api/cars`,
            headers: {},
            data: {
                ...car
            }
        });

        dispatch(newStateCars(cars));
    }
}





const newStateCars = (carsState = []) => ({

    type: types.delete,
    payload: carsState
})

