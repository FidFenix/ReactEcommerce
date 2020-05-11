import { createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist'; //b
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga  from './root-saga'; 
//import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if ( process.env.NODE_ENV === 'development' ) {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware( ...middlewares));


//we pass all sagas individuals, but with the root saga better
sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store); //b

export default {store, persistor};