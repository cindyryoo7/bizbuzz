import React, {useState, useEffect, useMemo} from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { GoogleMap as Map, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Coordinates } from '../models/coordinates';
import { GOOGLE_API_KEY } from "../.env";
import { Business } from '../models/business';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 345,
    maxWidth: 800,
    color: "blue",
    height: "100%"
  }
}))

type Props = {
  location: Coordinates | null,
  locations: Business[] | null
}

const containerStyle = {
  width: "400px",
  height: "400px"
}

const GoogleMap = (props: Props) => {
  const classes = useStyles();

  const [map, setMap] = useState<any>(null);
  const [center, setCenter] = useState<any>(null);
  const [markers, setMarkers] = useState<google.maps.LatLng[]>([] as google.maps.LatLng[]);

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
    if (props.location && window.google) {
      const currentLatLng = new window.google.maps.LatLng(parseFloat(props.location.latitude.toString()), parseFloat(props.location.longitude.toString()));
      setCenter(currentLatLng);
    }
  }, [props.location])

  useEffect(() => {
    if (props.locations && window.google) {
      const allLocations = props.locations.map(location => {
        return new window.google.maps.LatLng(parseFloat(location.coordinates.latitude.toString()), parseFloat(location.coordinates.longitude.toString()))
      })
      setMarkers(allLocations);
    }
  }, [props.locations])

  // const updatedMap = useMemo(() => {
  //   return(
  //     <Map
  //       mapContainerStyle={containerStyle}
  //       center={center}
  //       zoom={30}
  //       onLoad={onLoad}
  //       onUnmount={onUnmount}
  //     >
  //       {markers.length
  //         ? markers.map((marker, index) => (
  //           <Marker key={index} position={marker}/>
  //         ))
  //         : null
  //       }
  //     </Map>
  //   )
  // }, [markers]);

  // return isLoaded
  //   ? {updatedMap}
  //   : <></>

  return isLoaded ?
  <Map
    mapContainerStyle={containerStyle}
    center={center}
    zoom={30}
    onLoad={onLoad}
    onUnmount={onUnmount}
  >
    {markers.length
      ? markers.map((marker, index) => (
        <Marker key={index} position={marker}/>
      ))
      : <Marker position={center}/>
    }
  </Map>
  : <></>
}

export default GoogleMap;

//working
// return isLoaded ?
// <Map
//   mapContainerStyle={containerStyle}
//   center={center}
//   zoom={30}
//   onLoad={onLoad}
//   onUnmount={onUnmount}
// >
//   {markers.length
//     ? markers.map((marker, index) => (
//       <Marker key={index} position={marker}/>
//     ))
//     : <Marker position={center}/>
//   }
// </Map>
// : <></>