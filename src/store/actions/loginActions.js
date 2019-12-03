
export const LOGIN_ACCOUNT_REQUEST = 'LOGIN_ACCOUNT_REQUEST'
export const LOGIN_ACCOUNT_SUCCESS = 'LOGIN_ACCOUNT_SUCCESS'
export const LOGIN_ACCOUNT_FAILURE =  'LOGIN_ACCOUNT_FAILURE'


export const loginAccountRequest = () => {
    return {
        type: LOGIN_ACCOUNT_REQUEST
    }
}

export const loginAccountSuccess = (login) => {
    return {
        type: LOGIN_ACCOUNT_SUCCESS,
        payload: login
    }
}

export const loginAccountFailure = (error) => {
    return {
        type: LOGIN_ACCOUNT_FAILURE,
        payload: error
    }
}


export const loginAccount = (email, password) => {
    return function (dispatch) {

        console.log(email,password)
        dispatch (loginAccountRequest())
        fetch("https://mern-ubiqum-v2.herokuapp.com/users/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${email}&password=${password}`
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err =>  console.log(err))

    }
}