import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { carsReducer } from '../reducers/carsReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    cars: carsReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )        
    )
);