import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
//gives the entry point to the reducer
import {Provider} from 'react-redux'; // as parent allows access to everything
import store from './redux/store';

ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root")
);