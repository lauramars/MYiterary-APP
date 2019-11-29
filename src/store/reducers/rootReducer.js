import { combineReducers } from 'redux';
import citiesReducer from './cityReducer';
import itinerariesReducer from './itinerariesReducer';
import newAccountReducer from './newAccountReducer';

const rootReducer = combineReducers ({
    cities: citiesReducer, 
    itineraries: itinerariesReducer,
    newAccount: newAccountReducer
})
                                    

export default rootReducer