import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
//import {auth, createUserProfileDocument} from './firebase/firebase-util'; //we really want to store the state of the user


import {connect} from 'react-redux';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

//import { selectCollectionForPreview } from './redux/shop/shop.selectors';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends Component {
     //the first match, then it only rends that one( using switch)
     //Header gets rendered always regardless the other

    unsubcribeFromAuth = null;

    //replacing with the action
    componentDidMount() { //this is like an open a suscriber (always open) -> auth.onAuthStateChanged

        const { checkUserSession } = this.props;
        checkUserSession();
        //this is going to listen the auth

        //const {setCurrentUser} = this.props;  //firebase is a full stream of data, so we dont have a complete action
        
        /*this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => { //This async function is very basic next (Observable)

            if ( userAuth ) {//also alloses to get propeties of the data
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(onSnapshot => {
                    //console.log(onSnapshot.data()); //on the snapshot is the id
                    setCurrentUser({
                            id: onSnapshot.id,
                            ...onSnapshot.data()
                    }); // because state is asyncronus
                });
            }else {
                setCurrentUser(userAuth); // userAuth anyway is null;
            }
        });*/
    }

    //It is better to write Promises instead of simple observer listeners 
    //Better use a promise call when using a backend server

    componentWillUnmount() { //Because there is no complete action, we need to unsubcribe from Firebase
        this.unsubcribeFromAuth();
    }
    //if the Route does not match it will throw the header by default
    render() {
        return(
            <div>
                <Header/>
                <Switch> 
                    <Route exact path='/' component={HomePage}></Route> 
                    <Route path='/shop' component={ShopPage}></Route>
                    <Route exact path='/checkout' component={CheckoutPage}></Route>
                    <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)}></Route>
                </Switch>
            </div>
        );
    }
}

//to redi
/*const mapStateToProps = ({user})=> ({
    currentUser: user.currentUser
})*/
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    //collectionsArray: selectCollectionForPreview
})

const mapDispatchToProps = (dispatch) => ({
    //setCurrentUser: user => dispatch(setCurrentUser(user))
    checkUserSession: () => dispatch(checkUserSession()),
})

export default connect( mapStateToProps, mapDispatchToProps )(App);

//null first, we dont need state from reducer