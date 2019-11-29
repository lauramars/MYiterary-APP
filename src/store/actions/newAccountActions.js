const axios = require ('axios')

export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST'
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE'


export const createAccountRequest = () => {
    return {
        type: CREATE_ACCOUNT_REQUEST
    }
}

export const createAccountSuccess = (newAccount) => {
    return {
        type: CREATE_ACCOUNT_SUCCESS,
        payload: newAccount
    }
}

export const createAccountFailure = (error) => {
    return {
        type: CREATE_ACCOUNT_FAILURE,
        payload: error
    }
}


export const createAccount = () => {
    return function (dispatch) {

        dispatch (createAccountRequest())
        axios.post('https://mern-ubiqum-v2.herokuapp.com/users/register', {
            username:'',
            password:'',
            email:'',
            firstName: '',
            lastName: '',
            country:''
          })

          .then( response =>  {
              const newAccount = response.data
            dispatch(createAccountSuccess(newAccount));
          })
          .catch(error => {
            dispatch(createAccountFailure(error.message));
          });
    }
}


