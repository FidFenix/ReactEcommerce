import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss';

import CartItem from '../cart-item/cart-item.component';
import {withRouter} from 'react-router-dom';
import {selectCartItems, selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';


//we are not using Link to redirect, but withROuter
const CartDropdown = ({cartItems, itemCount, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                itemCount?
                    cartItems.map(cartItem => (<CartItem key = {cartItem.id} item={cartItem}/>))
                :   <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick = {()=> {
            history.push('/checkout') 
            dispatch(toggleCartHidden());
            }} >
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

/*
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
}) EQUAL TO THE BOTTOM*/

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    itemCount: selectCartItemsCount,
})

//all HoC return components and also take components, we need the matches, to get history
//it evaluates from inside to out

//connect passes distpach into a component as props, if we dont supply
//a second argument to connect
//

export default withRouter(connect(mapStateToProps)(CartDropdown));