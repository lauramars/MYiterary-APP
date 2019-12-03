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



export const createAccount = (name, password, email) => {
    return function (dispatch) {

        console.log(email,password,name)
            dispatch (createAccountRequest())
            fetch("https://mern-ubiqum-v2.herokuapp.com/users/register/",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `name=${name}&password=${password}&email=${email}`
            })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err =>  console.log(err))
        //     axios.post(``, {
        //         'name': name,
        //         'password':password,
        //         'email':email
        //     }).then( response =>  {
        //       const newAccount = response.data
        //     dispatch(createAccountSuccess(newAccount));
        //   })
        //   .catch(error => {
        //     dispatch(createAccountFailure(error.message));
        //   });
    }
}


