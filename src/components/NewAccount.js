import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createAccount} from '../store/actions/newAccountActions'
import { Link } from 'react-router-dom';
import homeIcon from '../images/homeIcon.png';


 class NewAccount extends Component {
 
    constructor (props) {
        super (props);
        this.state = {
            name:'',
            password:'',
            email:'',
            firstName:'',
            lastName:'',
            country:'',
            isAgree: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
 
    handleChange = (key,value) => {
        this.setState ({
                key: value
            });
    }

    handleSubmit = (e) => {
        // alert('You are creating a new account' + this.state.value);
        e.preventDefault();
        this.props.createAccount(this.state.name,this.state.password,this.state.email)
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        console.log('create account, dude!')
        return (
            
            <div className='form-container'>
                
                <h2><center>Create Account</center></h2>
                
                <form onSubmit ={this.handleSubmit}>

                    <div className='photo'>
                        <label>
                           <center> 
                            <input className='photoUser' name='photo' type='url' value={this.state.value} onChange={(ev) => this.setState({'photo': ev.target.value})} placeholder='Add Photo'/>
                            </center>
                        
                        </label>
                    </div>
                    
                    <div className='name'>
                    <label>
                        Username:
                        <input name='name'  type='text' value={this.state.name} onChange={(ev) => this.setState({'name': ev.target.value})}/>
                        
                        
                    </label>
                    </div>

                    <div className='password'>
                    <label>
                        Password:
                        <input name='password' type='password' value={this.state.password} onChange={(ev) => this.setState({'password': ev.target.value})}/>
                    </label>
                    </div>

                    <div className='email'>
                    <label>
                        Email:
                        <input name='email' type='email' value={this.state.email} onChange={(ev) => this.setState({'email': ev.target.value})}/>
                    </label>
                    </div>

                    <div className='firstName'>
                    <label>
                        First Name:
                        <input name='firstName' type='text' value={this.state.value} />
                    </label>
                    </div>

                    <div className='lastName'>
                    <label>
                        Last Name:
                        <input name='lastName' type='text' value={this.state.value} />
                    </label>
                    </div>

                    <div className='country'>
                    <label>
                        Country:
                        <select name='country' value={this.state.value} onChange={this.handleChange.country}>
                        <option value="" selected disabled hidden>Choose...</option>
                            <option value='England'>England</option>
                            <option value='France'>France</option>
                            <option value='Germany'>Germany</option>
                            <option value='Holland'>Holland</option>
                            <option value='Ireland'>Ireland</option>
                            <option value='Spain'>Spain</option>
                            <option value='United States'>United States</option>
                        </select>
                        </label>
                        </div>
                        
                        <div className='checkbox'>
                        <label> 
                        <input name='isAgree'  type='checkbox' 
                        checked={this.state.isAgree} onChange={this.handleInputChange}/> 
                        I agree to MYtinerary's Terms & Conditions.
                        </label>
                        </div>

                        <button id='btn' type="submit" value="submit" > OK </button>
                </form> 

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
        newAccount: state.newAccount,
        loading: state.newAccount.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createAccount: (name,password,email) => dispatch(createAccount(name,password,email))
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (NewAccount)
