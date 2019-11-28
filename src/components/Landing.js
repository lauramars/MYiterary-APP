import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MYtinerayLogo from '../images/MYtineraryLogo.png'
import arrowIcon from '../images/arrowIcon.png'
import homeIcon from '../images/homeIcon.png'

 class Landing extends Component {
    render() {
        return (
            <div className="flex-container">
                
                <div className="itemHeader">
                    <img src={MYtinerayLogo} alt="headerImage"/>
                </div>

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
                    <img src={homeIcon} alt="homeLogo"/>
                    
                </div>
            </div>
        )
    }
}


export default Landing