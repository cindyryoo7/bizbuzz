import React, { Component, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { GOOGLE_API_KEY } from "../.env";
import { Coordinates } from '../models/coordinates';
import { GoogleCoords } from '../models/googleCoords';


// const mapStyles = {
//   width: '49%',
//   height: 'auto'
// };

type Props = {
  google: any,
  center: GoogleCoords,
  markers: GoogleCoords[],
  // setMapCenter: (mapCenter: GoogleCoords) => void,
  dimensions: {width: string, height: string}
  // setIsMapLoaded: (isMapLoaded: boolean) => void,
  isMarkerShown: boolean,
  zoom: number
}

// type GoogleCoords = {
//   lat: number,
//   lng: number
// }

export const MapContainer = (props: Props) => {
  // const [center, setCenter] = useState<GoogleCoords>({
  //   lat: 37.79118339155342,
  //   lng: -122.40330988014378
  // });

  // const handleNewCenter = () => {
  //   if (props.markers.length && props.markers[0].lat) {
  //     const currentLatLng = {
  //       lat: props.markers[0].lat,
  //       lng: props.markers[0].lng
  //     };
  //     setCenter(currentLatLng)
  //   }
  // }

  // const recenterMap = () => {
  //   // const map = this.map;
  //   // const current = this.state.currentLocation;
  //   // const google = this.props.google;
  //   // const maps = google.maps;

  //   if (props.markers[0] !== center) {
  //     let center = new maps.LatLng(current.lat, current.lng);
  //     map.panTo(center);
  //   }
  // }

  // useEffect(() => {
  //   handleNewCenter();
  //   // if (props.markers.length) {
  //   //   const currentLatLng = {
  //   //     lat: props.markers[0].latitude,
  //   //     lng: props.markers[0].longitude
  //   //   };
  //   //   setCenter(currentLatLng);
  //   //   console.log('currentLatLng', currentLatLng)
  //   // }
  //   // console.log('props.markers', props.markers)
  // }, [props.markers])

  // useEffect(() => {
  //   console.log('center', center)
  // }, [center])

  // useEffect(() => {
  //   console.log('component has loaded');
  //   console.log('center', center);
  // }, [])

  // useEffect(() => {
  //   console.log('map center is changing')
  // }, [props.center])



  return (
    <Map
      google={props.google}
      zoom={props.zoom}
      style={props.dimensions}
      center={props.center}
    >
      {/* {props.isMarkerShown && <Marker position={{ lat: 37.79118339155342, lng: -122.40330988014378 }} />} */}
      {props.isMarkerShown &&
        props.markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))
      }
      </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapContainer);


// import React, {useState, useEffect, useMemo, useCallback } from 'react';
// import { makeStyles, Theme } from '@material-ui/core';
// import { GoogleMap as Map, useJsApiLoader, Marker, LoadScript } from '@react-google-maps/api';
// import { Coordinates } from '../models/coordinates';
// import { GOOGLE_API_KEY } from "../.env";
// import { Business } from '../models/business';
// import MarkerSetter from '../view-components/MarkerSetter';

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     minWidth: 345,
//     maxWidth: 800,
//     color: "blue",
//     height: "100%"
//   }
// }))

// type Props = {
//   markers: Coordinates[],
//   dimensions: {width: string, height: string}
//   setIsMapLoaded: (isMapLoaded: boolean) => void
// }

// const GoogleMap = (props: Props) => {
//   const classes = useStyles();

//   const [map, setMap] = useState<any>(null);
//   const [center, setCenter] = useState<any>(null);
//   const [googleCoords, setGoogleCoords] = useState<google.maps.LatLng[]>([] as google.maps.LatLng[]);
//   const [google, setGoogle] = useState<any>({});

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: GOOGLE_API_KEY
//   })

//   const onLoad = React.useCallback((map) => {
//     // setGoogle(window.google);
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//     setCenterAndMarkers();
//   }, []);

//   const onUnmount = React.useCallback(() => {
//     setMap(null);
//   }, []);

//   const setCenterAndMarkers = () => {
//     if (props.markers.length && props.markers[0].latitude && window.google) {
//       console.log('first conditional')
//       const currentLatLng = new window.google.maps.LatLng(parseFloat(props.markers[0].latitude.toString()), parseFloat(props.markers[0].longitude.toString()));
//       setCenter(currentLatLng);
//       if (props.markers.length > 1) {
//         console.log('second conditional')
//         const locationMarkers = props.markers.map(marker => (
//           new window.google.maps.LatLng(parseFloat(marker.latitude.toString()), parseFloat(marker.longitude.toString()))
//         ))
//         setGoogleCoords(locationMarkers);
//       }
//     }
//   }

//   // const setCenterAndMarkers = useCallback(async () => {
//   //   console.log('props.markers.length', props.markers.length)
//   //   console.log('props.markers[0].latitude', props.markers[0].latitude)
//   //   console.log('window.google', window.google)
//   //   if (props.markers.length && props.markers[0].latitude && window.google) {
//   //     console.log('first conditional')
//   //     const currentLatLng = new window.google.maps.LatLng(parseFloat(props.markers[0].latitude.toString()), parseFloat(props.markers[0].longitude.toString()));
//   //     await setCenter(currentLatLng);
//   //     if (props.markers.length > 1) {
//   //       console.log('second conditional')
//   //       const locationMarkers = props.markers.map(marker => (
//   //         new window.google.maps.LatLng(parseFloat(marker.latitude.toString()), parseFloat(marker.longitude.toString()))
//   //       ))
//   //       await setGoogleCoords(locationMarkers);
//   //     }
//   //   }
//   // }, [props.markers])

//   // useEffect(() => {
//   //   setCenterAndMarkers()
//   // }, [setCenterAndMarkers])

//   useEffect(() => {
//     setCenterAndMarkers();
//     onLoad(map);
//   }, [props.markers])

//   useEffect(() => {
//     setCenterAndMarkers();
//   }, [])

//   useEffect(() => {
//     console.log('googlemap component has loaded');
//   }, [])

//   // useEffect(()=>{
//   //   const defaultCoords =     {
//   //     latitude: 37.79118339155342,
//   //     longitude: -122.40330988014378
//   //   };
//   //   if (window.google) {
//   //     const currentLatLng = new window.google.maps.LatLng(parseFloat(defaultCoords.latitude.toString()), parseFloat(defaultCoords.longitude.toString()));
//   //     setCenter(currentLatLng);
//   //   }
//   // }, [google])

//   // useEffect(() => {
//   //   console.log('center', center)
//   //   console.log('googleCoords', googleCoords)
//   // }, [center, googleCoords])

//   useEffect(() => {
//     if (isLoaded) {
//       props.setIsMapLoaded(true);
//     }
//     setCenterAndMarkers()
//   }, [isLoaded])

//   return isLoaded && center !== null ?
//     <Map
//       mapContainerStyle={props.dimensions}
//       center={center}
//       zoom={30}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* {googleCoords.length > 1
//         ? googleCoords.map((marker, index) => {
//           return (
//             <Marker key={index} position={marker}/>
//           )
//         })
//         : <Marker position={center}/>
//       } */}
//       {googleCoords.length > 1
//         ? <MarkerSetter locations={googleCoords}/>
//         : <Marker position={center}/>
//       }
//     </Map>
//   : <></>
// }

// export default GoogleMap;

//   // return(
//     // <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
//     //   <Map
//     //     mapContainerStyle={props.dimensions}
//     //     center={center}
//     //     zoom={30}
//     //     // onLoad={onLoad}
//     //     onUnmount={onUnmount}
//     //   >
//     //     {/* <Marker position={center}/> */}
//     //     {/* {googleCoords.length > 1
//     //       ? googleCoords.map((marker, index) => {
//     //         return (
//     //           <Marker key={index} position={marker}/>
//     //         )
//     //       })
//     //       : <Marker position={center}/>
//     //     } */}
//     //       {googleCoords.length > 1
//     //         ? <MarkerSetter locations={googleCoords}/>
//     //         : <Marker position={center}/>
//     //       }
//     //   </Map>
//     // </LoadScript>
//     // )

//     //https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications