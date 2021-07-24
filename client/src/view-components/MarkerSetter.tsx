import React from 'react';
import { Marker } from '@react-google-maps/api';

type Props = {
  locations: google.maps.LatLng[]
}

const MarkerSetter = (props: Props) => (
  <div>
    {
      props.locations.map((location, index) => (
        <div key={index}>
          <Marker
            position={location}
          />
        </div>
      ))
    }
  </div>
)

export default MarkerSetter;