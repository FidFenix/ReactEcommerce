import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase-util'; //we really want to store the state of the user


import {connect} from 'react-redux';

import {setCurrentUser} from './redux/user/user.actions';

class App extends Component {
     //the first match, then it only rends that one( using switch)
     //Header gets rendered always regardless the other

    unsubcribeFromAuth = null;

    //replacing with the action
    componentDidMount() { //this is like an open a suscriber (always open) -> auth.onAuthStateChanged
        //this is going to listen the auth

        const {setCurrentUser} = this.props;
        this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {

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
            //createUserProfileDocument(userAuth);
            //this.setState({currentUser: user});  //even if we refreshed the app, firebase now, just out of the box
            //console.log(userAuth);
            setCurrentUser(userAuth)
            }
        });
    }

    componentWillUnmount() {
        this.unsubcribeFromAuth();
    }
    render() {
        return(
            <div>
                <Header/>
                <Switch> 
                    <Route exact path='/' component={HomePage}></Route> 
                    <Route path='/shop' component={ShopPage}></Route>
                    <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)}></Route>
                </Switch>
            </div>
        );
    }
}

//to redi
const mapStateToProps = ({user})=> ({
    currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect( mapStateToProps, mapDispatchToProps )(App);

//null first, we dont need state from reducer