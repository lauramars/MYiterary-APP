const axios = require ('axios')

export const FETCH_ITINERARIES_REQUEST = 'FETCH_ITINERARIES_REQUEST'
export const FETCH_ITINERARIES_SUCCESS = 'FETCH_ITINERARIES_SUCCESS'
export const FETCH_ITINERARIES_FAILURE = 'FETCH_ITINERARIES_FAILURE'


export const fetchItinerariesRequest = () => {
    return {
        type: FETCH_ITINERARIES_REQUEST
    }
}

export const fetchItinerariesSuccess = (itineraries) => {
    return {
        type: FETCH_ITINERARIES_SUCCESS,
        payload: itineraries
    }
}

export const fetchItinerariesFailure = (error) => {
    return {
        type: FETCH_ITINERARIES_FAILURE,
        payload: error
    }
}


export const fetchItinerariesList = (city) => {
    return function (dispatch) {
        
        dispatch (fetchItinerariesRequest())
        axios.get (`https://mern-ubiqum-v2.herokuapp.com/itineraries/${city}`)
        .then (response => {
            const itineraries = response.data
            dispatch(fetchItinerariesSuccess(itineraries))
        })

        .catch (error => {
            dispatch(fetchItinerariesFailure(error.message))
        })
    }
}
