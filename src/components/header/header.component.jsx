import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {auth} from '../../firebase/firebase-util';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import './header.style.scss';

const Header = ({currentUser, hidden}) => (
    
    <div className = 'header'>
        <Link className='logo-container' to = '/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
        hidden ? 
        (null):
        (<CartDropdown/>)
        }
    </div>
);

//function that allows us to access the root reducer
//state is the root reducer
//const mapStateToProps = (rootstate) => ({
//    currentUser: rootstate.user.currentUser
//})

/* 1 change
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});*/
/* 2 change, but it will be the same like writting 20 times
const  mapStateToProps = (state)=> ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})*/
//passes the top state and passes to the selector
const  mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);