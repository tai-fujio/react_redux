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

  setErrorMessage(message){
    this.setState({
      address: message,
      lat: 0,
      lng: 0
    })
  }
  handlePlaceSubmit(place){
    axios
    .get(ENDPOINT, {params: {address: place, key: process.env.API_KEY}})
    .then((results) => {
      const result = results.data.results[0];
      const data = results.data;
      switch(data.status){
        case 'OK': {
          const location = result.geometry.location;
          this.setState({
            address:result.formatted_address,
            lat: location.lat,
            lng: location.lng,
          });
          break;
        }
        case 'ZERO_RESULTS': {
          this.setErrorMessage('データがありません')
          break;
        };
        default:{
          this.setErrorMessage('エラーが発生しました')
        };
      };
    })
    .catch(() => {
      this.setErrorMessage('ネットワークがありません');
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
