import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import homeIcon from '../images/homeIcon.png';
import {fetchCitiesList} from '../store/actions/cityActions';


class Cities extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            cities: [],
            cityFilter: "",
            fetchCitiesList: []
        }
    }

    componentDidMount() {
        this.props.fetchCitiesList()
    }

    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })
    }

    // fetchCities = async () => {
    //     var url = "https://mern-ubiqum-v2.herokuapp.com/cities/all"
    //     return await fetch(url, {
    //         method: "GET",
    //     })
    //         .then(response => response.json())
    //         .then(data => data)
    //         .catch(error => console.log(error))
    // }

    filterCities = () => {
        const { cities } = this.props;
        const { cityFilter } = this.state;
        return cities.filter((city) => {
            return city.name.toLowerCase().indexOf(cityFilter.toLowerCase()) !== -1
        },
        );
    }

    render() {
        // console.log(this.props)
        const { loading } = this.props;
         
        if (!loading)
        return (
            
            <div className="flex-container">
                <header >
                 <div></div>
                </header>

                <div className="filter">
                    <label htmlFor="filter">Filter by City: </label>
                    <input type="text" id="filter"
                        value={this.state.cityFilter}
                        onChange={this.handleChange.bind(this)} />
                </div>
                
                <div className="city-list">
                   <ul>
                        {this.filterCities().map((city) => {
                            return (
                                <li className="city" key={city._id}>
                                    <Link to={`/itineraries/${city.name}`}>
                                    {city.name} - {city.country}
                                    <img src={city.img} alt="cityPhoto"/>
                                    
                                  </Link>
                                  
                                </li>   
                            )
                        }
                        )}
                    </ul>
                </div>
                

                <div className="itemFooter">
                    <Link to="/">
                        <img src={homeIcon} alt="homeLogo" />
                    </Link>
                </div>

            </div>
        )
        else 
        return (
            <div>Loading ... </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // initialState: state.initialState
        cities: state.cities.cities,
        loading: state.cities.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCitiesList: () => dispatch(fetchCitiesList())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
    ) (Cities)