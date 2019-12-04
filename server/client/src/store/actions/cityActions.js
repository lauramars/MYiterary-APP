const axios = require('axios')




// 2- ACTIONS

    export const FETCH_CITIES_REQUEST = 'FETCH_CITIES_REQUEST'
    export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS'
    export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE' 

// Action creator

export const fetchCitiesRequest = ()=> {
    return {
        type: FETCH_CITIES_REQUEST
    }
}

export const fetchCitiesSuccess = (cities)=> {
    return {
        type: FETCH_CITIES_SUCCESS,
        payload: cities
    }
}

export const fetchCitiesFailure = (error)=> {
    return {
        type: FETCH_CITIES_FAILURE,
        payload: error
    }
}


export const fetchCitiesList = () => {
    return function(dispatch) {
        
        dispatch(fetchCitiesRequest())
        axios.get('https://mern-ubiqum-v2.herokuapp.com/cities/all')
        .then (response => {
            const cities = response.data
            dispatch(fetchCitiesSuccess(cities))
        })

        .catch (error => {
            dispatch(fetchCitiesFailure(error.message))
        })
    }
}
