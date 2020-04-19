import { createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist'; //b
import logger from 'redux-logger';
import rootReducer from './root-reducer';
const middlewares = [];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware( ...middlewares));

export const persistor = persistStore(store); //b

export default {store, persistor};