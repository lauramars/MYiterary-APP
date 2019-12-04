//  3- REDUCERS

// 0- create ReduxStore

// const redux = require('redux')
// const createStore = redux.createStore
// const applyMiddleware = redux.applyMiddleware
// const thunkMiddleware = require('redux-thunk').default




// import {combineReducers} from 'redux'
// import {
//     FETCH_CITIES_REQUEST,
//     FETCH_CITIES_SUCCESS,
//     FETCH_CITIES_FAILURE
// } from 

 const FETCH_CITIES_REQUEST = 'FETCH_CITIES_REQUEST'
 const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS'
 const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE' 

// 1- STATE

const initialState = {
    loading: true, 
    cities: [],
    error: ''
}

function citiesReducer (state = initialState, action) {
    switch (action.type){
        case FETCH_CITIES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_CITIES_SUCCESS:
            return {
                loading: false, 
                cities: action.payload,
                error: ''
            }    

        case FETCH_CITIES_FAILURE:
            return {
                loading: false, 
                cities: [],
                error: action.payload
            }  
        default: 
            return state
    }
}


export default citiesReducer;
// Action Creators



// const store = createStore(citiesReducer, applyMiddleware(thunkMiddleware))

// // now we subscribe the store

// store.subscribe(()=> {console.log(store.getState())})
// store.dispatch(fetchCitiesList())

// export default (citiesReducer, fetchCitiesList)