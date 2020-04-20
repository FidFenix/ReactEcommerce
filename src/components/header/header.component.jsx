import React from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

import {auth} from '../../firebase/firebase-util';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

//import './header.style.scss';


import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv,
} from './header.style';

const Header = ({currentUser, hidden}) => (
    
    <HeaderContainer>
        <LogoContainer to = '/'>
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser?
                <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
        hidden ? 
        (null):
        (<CartDropdown/>)
        }
    </HeaderContainer>
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