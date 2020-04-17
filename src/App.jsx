import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

class App extends Component {
     //the first match, then it only rends that one( using switch)
     //Header gets rendered always regardless the other
    render() {
        return(
            <div>
                <Header/>
                <Switch> 
                    <Route exact path='/' component={HomePage}></Route> 
                    <Route path='/shop' component={ShopPage}></Route>
                </Switch>
            </div>
        );
    }
}
export default App;