import { CartActionTypes } from "./cart.types";

import { addItemToCart, removeItemFromCart, removeItemByOne } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = ( prevState = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...prevState,
                hidden: !prevState.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...prevState,
                cartItems: addItemToCart(prevState.cartItems, action.payload) //prevState.cartItems.concat(action.payload) // [..prevState, action.payload]
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...prevState,
                cartItems: removeItemByOne(prevState.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...prevState,
                cartItems: removeItemFromCart(prevState.cartItems, action.payload)                
            }
        default:
            return prevState;
    }
};

export default cartReducer;