import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer'

const store = createStore( 
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// store.subscribe(()=> {console.log(store.getState())})
// store.dispatch(fetchCitiesList())

ReactDOM.render(
 <Provider store = {store}>
   <App />
</Provider>, 
document.getElementById('root')
);

