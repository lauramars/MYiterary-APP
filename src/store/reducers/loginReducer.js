const LOGIN_ACCOUNT_REQUEST = 'LOGIN_ACCOUNT_REQUEST'
const LOGIN_ACCOUNT_SUCCESS = 'LOGIN_ACCOUNT_SUCCESS'
const LOGIN_ACCOUNT_FAILURE = 'LOGIN_ACCOUNT_FAILURE'


const initialState = {
    loading: true,
    login: {},
    error: ''
}

function loginReducer (state = initialState, action){
    switch (action.type){
        case LOGIN_ACCOUNT_REQUEST:
            return {
                ...state,
                loading:true
            }

        case LOGIN_ACCOUNT_SUCCESS:
            return {
                loading: false, 
                login: action.payload,
                error: ''
            } 

        case LOGIN_ACCOUNT_FAILURE:
            return {
                loading: false, 
                login: {},
                error: action.payload
            }    
        
        default:
            return state
    }
}

export default loginReducer