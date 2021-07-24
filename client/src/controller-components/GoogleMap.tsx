import React, {useState, useEffect} from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { GoogleMap as Map, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Coordinates } from '../models/coordinates';
import { GOOGLE_API_KEY } from "../.env";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 345,
    maxWidth: 800,
    color: "blue",
    height: "100%"
  }
}))

type Props = {
  location: Coordinates
}

const containerStyle = {
  width: "400px",
  height: "400px"
}

const GoogleMap = (props: Props) => {
  const classes = useStyles();

  const [map, setMap] = useState<any>(null);
  const [center, setCenter] = useState<any>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY
  })

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, [])

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, [])

  useEffect(() => {
    if (props.location) {
      const currentLatLng = new google.maps.LatLng(parseFloat(props.location.latitude.toString()), parseFloat(props.location.longitude.toString()));
      setCenter(currentLatLng);
    }
  }, [props.location])

  return isLoaded ?
    <Map
      mapContainerStyle={containerStyle}
      center={center}
      zoom={30}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center}/>
    </Map>
  : <></>
}

export default GoogleMap;