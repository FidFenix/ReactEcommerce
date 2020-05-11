import { takeLatest, call, all, put } from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import { clearAllItemsFromCart } from './cart.actions';


export function* clearItemsFromCart() {
    try {
        yield put(clearAllItemsFromCart());
    } catch(error) {
        yield put(clearAllItemsFromCart());
    }
}

export function* onSignOutClearItemsFromCart() {
    //instead of this, we reuse saga middleware
    //yield takeLatest(CartActionTypes.CLEAR_ALL_ITEMS_FROM_CART_START, clearItemsFromCart);
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearItemsFromCart); //much more easy
}


export function* cartSagas() {
    yield all([call(onSignOutClearItemsFromCart)])
}