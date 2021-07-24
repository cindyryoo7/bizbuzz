import React, {useState, useEffect, useMemo} from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { GoogleMap as Map, useJsApiLoader, Marker, LoadScript } from '@react-google-maps/api';
import { Coordinates } from '../models/coordinates';
import { GOOGLE_API_KEY } from "../.env";
import { Business } from '../models/business';
import MarkerSetter from '../view-components/MarkerSetter';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 345,
    maxWidth: 800,
    color: "blue",
    height: "100%"
  }
}))

type Props = {
  markers: Coordinates[],
  dimensions: {width: string, height: string}
}

const GoogleMap = (props: Props) => {
  const classes = useStyles();

  const [map, setMap] = useState<any>(null);
  const [center, setCenter] = useState<any>(null);
  const [googleCoords, setGoogleCoords] = useState<google.maps.LatLng[]>([] as google.maps.LatLng[]);

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
    if (props.markers.length && props.markers[0].latitude && window.google) {
      const currentLatLng = new window.google.maps.LatLng(parseFloat(props.markers[0].latitude.toString()), parseFloat(props.markers[0].longitude.toString()));
      setCenter(currentLatLng);
      if (props.markers.length > 1) {
        const locationMarkers = props.markers.map(marker => (
          new window.google.maps.LatLng(parseFloat(marker.latitude.toString()), parseFloat(marker.longitude.toString()))
        ))
        setGoogleCoords(locationMarkers);
      }
    }
  }, [props.markers])

  // useEffect(() => {
  //   console.log('googlemap component has loaded');
  //   console.log('center on mount', center)
  // }, [])

  // useEffect(() => {
  //   console.log('center useeffect', center)
  // }, [center])

  return isLoaded ?
    <Map
      mapContainerStyle={props.dimensions}
      center={center}
      zoom={30}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {googleCoords.length > 1
        ? googleCoords.map((marker, index) => {
          return (
            <Marker key={index} position={marker}/>
          )
        })
        : <Marker position={center}/>
      }
    </Map>
  : <></>
}

export default GoogleMap;

  // return(
    // <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
    //   <Map
    //     mapContainerStyle={props.dimensions}
    //     center={center}
    //     zoom={30}
    //     // onLoad={onLoad}
    //     onUnmount={onUnmount}
    //   >
    //     {/* <Marker position={center}/> */}
    //     {/* {googleCoords.length > 1
    //       ? googleCoords.map((marker, index) => {
    //         return (
    //           <Marker key={index} position={marker}/>
    //         )
    //       })
    //       : <Marker position={center}/>
    //     } */}
    //       {googleCoords.length > 1
    //         ? <MarkerSetter locations={googleCoords}/>
    //         : <Marker position={center}/>
    //       }
    //   </Map>
    // </LoadScript>
    // )