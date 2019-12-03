import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginAccount} from '../store/actions/loginActions';
import { Link } from 'react-router-dom';
import homeIcon from '../images/homeIcon.png';



class Login extends Component {

   constructor (props) {
       super (props);
       this.state = {
           email:'',
           password:''
       }

       this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange = (key,value) => {
    this.setState ({
            key: value
        });
}

handleSubmit = (e) => {
    
    e.preventDefault();
    this.props.loginAccount(this.state.email, this.state.password)
}

    render() {
        return (
            <div className='form-container'>
            
               <h2><center>Login</center></h2>

               <form onSubmit ={this.handleSubmit}>

               <div className='email'>
                    <label>
                        Email:
                        <input name='email' type='email' value={this.state.email} onChange={(ev) => this.setState({'email': ev.target.value})}/>
                    </label>
                    </div>

                    <div className='password'>
                    <label>
                        Password:
                        <input name='password' type='password' value={this.state.password} onChange={(ev) => this.setState({'password': ev.target.value})}/>
                    </label>
                    </div>

                    <div className='checkbox2'>
                        <label>
                        <input name='RememberMe'  type='checkbox'/>
                        Remember me
                        </label>
                    </div>

                    <button id='btn' type="submit" value="submit"> OK </button>

                </form>
           
               <div className="createAccount">
                   <p><center>Don't have a MYtinerary account yet?
                    You should create one! It's totally free
                    and only takes a minute.</center></p>
                    <Link to="/newAccount">
                    <h3><center>Create Account</center></h3>
                    </Link>
               </div>

                <div className="itemFooter">
                    <Link to="/">
                        <img src={homeIcon} alt="homeLogo" />
                    </Link>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginAccount: state.loginAccount,
        // loading: state.loginAccount.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginAccount: (password,email) => dispatch(loginAccount(password,email))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Login)