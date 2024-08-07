import React from 'react';
import { GoogleMap, LoadScript  } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey ="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d21587.220859941735!2d10.762802583537812!3d36.45853309853284!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1722902423719!5m2!1sfr!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" // Replace this with your actual API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}


export default Map;
