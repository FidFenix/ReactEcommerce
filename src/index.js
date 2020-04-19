import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
//gives the entry point to the reducer
import { Provider } from 'react-redux'; // as parent allows access to everything
import { store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';  //include electron and react-native


ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
    , document.getElementById("root")
);