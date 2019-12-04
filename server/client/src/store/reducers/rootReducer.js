import { combineReducers } from 'redux';
import citiesReducer from './cityReducer';
import itinerariesReducer from './itinerariesReducer';
import newAccountReducer from './newAccountReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers ({
    cities: citiesReducer, 
    itineraries: itinerariesReducer,
    newAccount: newAccountReducer,
    login: loginReducer,
})
                                    

export default rootReducer