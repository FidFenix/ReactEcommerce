//Global reducer
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //i want to use localstorage
//import sessionStorage from ''

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //contains any reducer passed
}

const rootReducer = combineReducers({
    user: userReducer, 
    cart: cartReducer
})

/*export default combineReducers({
    user: userReducer,  //we really no need to persist the user, since it handles firebase
    cart: cartReducer
})*/

export default persistReducer(persistConfig, rootReducer);