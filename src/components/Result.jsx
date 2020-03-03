import React, {PropTypes} from 'react';

const Result = ({address,lat,lng}) => (
  <ul className = "result">
    <li>住所:{address}</li>
    <li>緯度:{lat}</li>
    <li>経度:{lng}</li>
  </ul>
);

Result.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Result.defaultProps = {
  address: '',
  lat: 0,
  lng: 0,
};

export default Result;
