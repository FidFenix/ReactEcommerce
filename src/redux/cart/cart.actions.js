import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item 
})

export const clearAllItemsFromCart = () => ({
    type: CartActionTypes.CLEAR_ALL_ITEMS_FROM_CART,
})

export const clearAllItemsFromCartStart = () => ({ //should not exist
    type: CartActionTypes.CLEAR_ALL_ITEMS_FROM_CART_START,
})