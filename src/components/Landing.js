import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import arrowIcon from '../images/arrowIcon.png'

 class Landing extends Component {
    render() {
        return (
            <div className="grid-container">
                
                <header className="itemHeader">
                    
                </header>

                <div className="itemInfo">
                   <p>Find your perfect trip, designed by insiders 
                    who know and love their cities
                   </p>
                </div>

                 <div className="itemNext">
                     <h1 >Start browsing</h1>
                  <Link to="/cities">
                  <img src={arrowIcon} alt="arrowLogo" />
                  </Link>
                </div>

                <div className="itemLinks">
                <span>
                  <p>Want to build your own MYtinerary?</p>
                 
                  <p>Log in</p>
                  
                  
                  <p>Create an account</p>
                  </span>
                  
                </div>

                <div className="itemFooter">

                </div>
            </div>
        )
    }
}


export default Landing