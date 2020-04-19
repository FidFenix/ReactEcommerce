import React from 'react';

import {ReactComponent as ShoppingIcon}  from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import './cart-icon.style.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'>            
        </ShoppingIcon>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = ( dispatch ) => ( {
    toggleCartHidden: () => dispatch( toggleCartHidden() )
})
//this is always rendering, to the general state, plus the object is always new and that is because reduce is called many times
//this is not good for performance, becaus eit render all the time (states change, but it does not modify want we really care)
//So we need to cash this value, it is called MEMOIZATION, we will use a library 'ricilate' (allows to write selectors, it knows if the property
//from the state we really need, and react will not re render), also allowes us to separate our selector
//SELECTORS?? WTF
/*const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce (
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
    )
})*/

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect( mapStateToProps, mapDispatchToProps )( CartIcon );