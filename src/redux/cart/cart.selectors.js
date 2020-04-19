import {createSelector} from 'reselect';
//input selector, only return one layer of the entire reducer
//this three belongs to the input selector
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulated, cartItem) => accumulated + cartItem.quantity, 0)
)