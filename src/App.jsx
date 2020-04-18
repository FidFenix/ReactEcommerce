import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase-util'; //we really want to store the state of the user

class App extends Component {
     //the first match, then it only rends that one( using switch)
     //Header gets rendered always regardless the other
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        }
    }

    unsubcribeFromAuth = null;

    componentDidMount() { //this is like an open a suscriber (always open) -> auth.onAuthStateChanged
        //this is going to listen the auth
        this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});  //even if we refreshed the app, firebase now, just out of the box
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubcribeFromAuth();
    }
    render() {
        return(
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch> 
                    <Route exact path='/' component={HomePage}></Route> 
                    <Route path='/shop' component={ShopPage}></Route>
                    <Route path='/signin' component={SignInAndSignUpPage}></Route>
                </Switch>
            </div>
        );
    }
}
export default App;