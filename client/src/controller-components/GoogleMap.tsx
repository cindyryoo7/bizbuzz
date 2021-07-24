import React, {useState, useEffect, useMemo, useCallback } from 'react';
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
  setIsMapLoaded: (isMapLoaded: boolean) => void
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
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  const setCenterAndMarkers = () => {
    if (props.markers.length && props.markers[0].latitude && window.google) {
      console.log('first conditional')
      const currentLatLng = new window.google.maps.LatLng(parseFloat(props.markers[0].latitude.toString()), parseFloat(props.markers[0].longitude.toString()));
      setCenter(currentLatLng);
      if (props.markers.length > 1) {
        console.log('second conditional')
        const locationMarkers = props.markers.map(marker => (
          new window.google.maps.LatLng(parseFloat(marker.latitude.toString()), parseFloat(marker.longitude.toString()))
        ))
        setGoogleCoords(locationMarkers);
      }
    }
  }

  // const setCenterAndMarkers = useCallback(async () => {
  //   console.log('props.markers.length', props.markers.length)
  //   console.log('props.markers[0].latitude', props.markers[0].latitude)
  //   console.log('window.google', window.google)
  //   if (props.markers.length && props.markers[0].latitude && window.google) {
  //     console.log('first conditional')
  //     const currentLatLng = new window.google.maps.LatLng(parseFloat(props.markers[0].latitude.toString()), parseFloat(props.markers[0].longitude.toString()));
  //     await setCenter(currentLatLng);
  //     if (props.markers.length > 1) {
  //       console.log('second conditional')
  //       const locationMarkers = props.markers.map(marker => (
  //         new window.google.maps.LatLng(parseFloat(marker.latitude.toString()), parseFloat(marker.longitude.toString()))
  //       ))
  //       await setGoogleCoords(locationMarkers);
  //     }
  //   }
  // }, [props.markers])

  // useEffect(() => {
  //   setCenterAndMarkers()
  // }, [setCenterAndMarkers])

  useEffect(() => {
    setCenterAndMarkers();
  }, [props.markers])

  useEffect(() => {
    setCenterAndMarkers();
  }, [])

  useEffect(() => {
    console.log('googlemap component has loaded');
  }, [])

  useEffect(() => {
    console.log('center', center)
    console.log('googleCoords', googleCoords)
  }, [center, googleCoords])

  useEffect(() => {
    if (isLoaded) {
      props.setIsMapLoaded(true);
    }
    setCenterAndMarkers()
  }, [isLoaded])

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