import React, {Component} from 'react';

import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

class App extends Component {
     //the first match, then it only rends that one( using switch)
    render() {
        return(
            <div>
                <Switch> 
                    <Route exact path='/' component={HomePage}></Route> 
                    <Route path='/hats' component={HatsPage}></Route>
                </Switch>
            </div>
        );
    }
}
export default App;