import { createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist'; //b
import logger from 'redux-logger';
import rootReducer from './root-reducer';
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware( ...middlewares));

export const persistor = persistStore(store); //b

export default {store, persistor};