const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST'
const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'
const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE'


const initialState ={
    loading: true,
    newAccount: {},
    error:''
}

function newAccountReducer(state = initialState, action){
    switch (action.type){
        case CREATE_ACCOUNT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_ACCOUNT_SUCCESS:
            return {
                loading: false,
                newAccount: action.payload,
                error:''
            } 

        case CREATE_ACCOUNT_FAILURE:
            return {
                loading: false, 
                newAccount: {},
                error: action.payload
            }  
        default:
            return state   
    }

}

export default newAccountReducer

