import React, { Component } from 'react';



class Cities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            cityFilter: "",
        }
    }

    componentDidMount() {
        this.fetchCities()
            .then((cities) => this.setState({ cities }))
    }

    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })
    }

    fetchCities = async () => {
        var url = "https://mern-ubiqum-v2.herokuapp.com/cities/all"
        return await fetch(url, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.log(error))
    }

    filterCities = () => {
        const { cities, cityFilter } = this.state;
        return cities.filter((city) =>{
            return city.name.toLowerCase().indexOf(cityFilter.toLowerCase())!== -1 
            },
        ); 
    }

    render() {
        return (
            <div>
                <div className="Filter">
                    <label htmlFor="filter">Filter by City: </label>
                    <input type="text" id="filter" 
                        value={this.state.cityFilter}
                        onChange={this.handleChange.bind(this)}/>
      
                </div>
                <ul className="city-list">
                    {this.filterCities().map((city) => {
                        return (
                            <li className="city" key={city._id}>{city.name}</li>
                        )
                        }
                    )}
                </ul>
            </div>    
        )
    }
}


export default Cities