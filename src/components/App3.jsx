import React, {Component} from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Result from './Result';
const ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

class App3 extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };

  handlePlaceSubmit(place){
    axios
    .get(ENDPOINT, {params: {address: place, key: process.env.API_KEY}})
    .then((results) => {
      console.log(results);
    });
  };

  render(){
    return(
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)}/>
        <Result
        address={this.state.address}
        lat={this.state.lat}
        lng={this.state.lng}
        />
      </div>
    );
  };
};

export default App3;
