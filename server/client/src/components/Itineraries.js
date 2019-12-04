import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchItinerariesList } from '../store/actions/itinerariesActions'
import userIcon from '../images/userIcon.png'
import { Link } from 'react-router-dom';



class Itineraries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
            city: "",
            fetchItineraryList: []
        }
    }

    componentDidMount() {
        let city = window.location.pathname.split('/')[2]
        this.props.fetchItinerariesList(city);
    }


    render() {

        const { itineraries } = this.props;
        
        console.log(itineraries)
       

        const itinerariesList = itineraries.map(itinerary => {
            return (
                <div className="itineraryItem" key={itinerary._id} >

                    <div className="user">
                        <img src={userIcon} alt="userPhoto" />
                        <p>UserName</p>
                    </div>

                    <div className="titleIt">
                        <h3> {itinerary.title} </h3>
                    </div>

                    <div className="detailsIt">
                        <p>Likes:{itinerary.rating}</p>
                        <br></br>
                        <p>{itinerary.duration}</p>
                        <br></br>
                        <p>{itinerary.price} </p>
                    </div>

                    <div className="viewAll">
                        <p>View All</p>
                    </div>
                </div>
            )
        })


        const { loading } = this.props;

        if (!loading)
            return (
                <div className="flex-container">

                    <div className="itineraries-list">
                        <h2>City:</h2>
                        <h3> Available MYtineraries:</h3>
                        {itinerariesList}
                       
                       <Link to="/cities">
                        <center>Chose another city...</center>
                        </Link>
                    </div>

                </div>
            )
        else
            return (
                <div>Loading itineraries...</div>
            )
    }
}
const mapStateToProps = state => {
    return {
        itineraries: state.itineraries.itineraries,
        loading: state.itineraries.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItinerariesList: (city) => dispatch(fetchItinerariesList(city))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Itineraries)