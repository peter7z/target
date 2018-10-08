import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps';
import { object, bool, func, array } from 'prop-types';

import marker from '../../img/marker.svg';

const Map = ({ targets, handleClick, isMarkerShown, coords: { latitude, longitude }, target }) => (
  <GoogleMap
    onClick={handleClick}
    defaultZoom={18}
    defaultCenter={{ lat: latitude, lng: longitude }}
  >
    {isMarkerShown &&
      <Marker
        icon={{ url: marker }}
        position={{ lat: latitude, lng: longitude }}
      />}
    {target &&
      <div>
        <Marker
          icon={{ url: marker }}
          position={{ lat: target.lat, lng: target.lng }}
        />
        <Circle
          center={{ lat: target.lat, lng: target.lng }}
          radius={target.radius}
        />
      </div>
    }
    {targets.map(({ target: { lat, lng, radius, id } }) => (
      <div key={id} >
        <Circle
          options={{
            strokeOpacity: '0',
            fillOpacity: '.7',
            fillColor: '#efc638'
          }}
          center={{ lat, lng }}
          radius={radius}
        />
      </div>
    ))}
  </GoogleMap>);

Map.propTypes = {
  coords: object,
  handleClick: func,
  isMarkerShown: bool,
  target: object,
  targets: array,
};

export default withScriptjs(withGoogleMap(Map));
