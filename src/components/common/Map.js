import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { bool } from 'prop-types';
import { geolocated } from 'react-geolocated';

import marker from '../../img/marker.svg';

const Map = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: props.coords.latitude, lng: props.coords.longitude }}
  >
    {props.isMarkerShown && <Marker icon={{ url: marker }} position={{ lat: props.coords.latitude, lng: props.coords.longitude }} />}
  </GoogleMap>));

Map.propTypes = {
  isMarkerShown: bool,
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000 })(Map);
