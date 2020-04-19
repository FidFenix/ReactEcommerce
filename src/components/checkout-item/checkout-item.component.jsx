import React from 'react';

import './checkout-item.style.scss';
import { connect } from 'react-redux';
import { addItem, removeItem, removeItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, removeeeeItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem; 
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src = {imageUrl} alt = 'item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem) }>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem) }>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick = { ()=> removeeeeItem(cartItem) }>&#10005;</div>
    </div>
)};

/*const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})*/


//the names used as the object for maapong must be used in this component
const mapDispatchToProps = (dispatch) => ({
    removeeeeItem: (cartItem) => dispatch(removeItemFromCart(cartItem)),
    removeItem: (cartItem) => dispatch(removeItem(cartItem)),
    addItem: (cartItem) => dispatch(addItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);