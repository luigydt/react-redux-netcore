import { cars } from '../helpers/loadCars'
import { types } from "../types/types";

let initialState = cars;

export const carsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.delete:
            return state.filter(car => car.idPedido !== action.payload);//idCar in action.payload
        case types.update:
            break;
        case types.insert:
            break;
        default:
            return state;
    }

}