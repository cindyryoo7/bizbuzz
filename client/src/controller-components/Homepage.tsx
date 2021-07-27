import {useState, useEffect} from 'react';
import axios from 'axios';
import { Business } from '../models/business';
import { Grid, CircularProgress, makeStyles, Theme, Typography } from '@material-ui/core';
import BusinessCard from './BusinessCard';
import { useHistory } from "react-router-dom";
import SearchBar from '../controller-components/SearchBar';
import GoogleMap from './GoogleMap';
import { GoogleCoords } from '../models/googleCoords';
import BusinessList from './BusinessList';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "10px",
  },
  resultsText: {
    padding: "10px",
    fontStyle: "italic"
  },
  right: {
    width: "100%",
    paddingRight: "15px",
  },
}))

type Props = {
  loading: boolean,
  // centerCoords: GoogleCoords,
  // centerPhysical: string,
  setLoading: (loading: boolean) => void,
  // setCenterCoords: (centerCoords: GoogleCoords) => void,
  // setCenterPhysical: (centerPhysical: string) => void
}



const Homepage = (props: Props) => {
  // const [currentLocationCoords, setCurrentLocationCoords] = useState<Coordinates>({
  //   latitude: 37.79118339155342,
  //   longitude: -122.40330988014378
  // }); //Twitch SF Office Location

  const [centerCoords, setCenterCoords] = useState<GoogleCoords>({
    lat: 37.79118339155342,
    lng: -122.40330988014378
  });//Twitch SF Office Location
  const [centerPhysical, setCenterPhysical] = useState<string>("for San Francisco, CA");

  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [markers, setMarkers] = useState<GoogleCoords[]>([]);
  const [updateType, setUpdateType] = useState<string>("coordinates");

  const [mapCenter, setMapCenter] = useState<GoogleCoords>(centerCoords);

  // const [isListLoaded, setIsListLoaded] = useState<boolean>(false);
  // const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

  const classes = useStyles();

  // // invokes GET requests to Yelp API if location coordinates change
  // useEffect(() => {
  //   console.log('centerCoords useEffect firing', centerCoords)
  //   getBusinessesByLatLong(centerCoords.lat.toString(), centerCoords.lng.toString());
  // }, [centerCoords]);

  // // invokes GET requests to Yelp API if location coordinates change
  // useEffect(() => {
  //   console.log('centerPhysical useEffect firing')
  //   getBusinessesByLocation(centerPhysical)
  // }, [centerPhysical]);

  useEffect(() => {
    updateType === "coordinates"
      ? getBusinessesByLatLong(centerCoords.lat.toString(), centerCoords.lng.toString())
      : getBusinessesByLocation(centerPhysical)
  }, [updateType, centerCoords, centerPhysical]);


  // pulls coordinates of all businesses returned from Yelp API
  // useEffect(() => {
  //   if (businesses.length) {
  //     console.log('businesses useEffect firing', businesses)
  //     const allCoordinates = businesses.map(business => (
  //       {
  //         lat: business.coordinates.latitude,
  //         lng: business.coordinates.longitude,
  //       }
  //     ));

  //     setMarkers(allCoordinates);
  //     setMapCenter(allCoordinates[0]);
  //   }
  // }, [businesses])

  // setMarkers([props.currentLocationCoords].concat(allCoordinates));
  // props.setCenterCoords(allCoordinates[0]);

  const parseCoordinates = (listOfBusinesses: Business[]) => {
    if (listOfBusinesses.length) {
      const allCoordinates = listOfBusinesses.map((business: Business) => (
        {
          lat: business.coordinates.latitude,
          lng: business.coordinates.longitude,
        }
      ));
      setMarkers(allCoordinates);
      setMapCenter(allCoordinates[0]);
    }
  }



  // GET request to Yelp API by location in string format
  const getBusinessesByLocation = (location: string): void => {
    axios
      .get(`/search/${location}`)
      .then(result => result.data)
      .then(result => {
        console.log('getBusinessesByLocation firing')
        setBusinesses(result);
        return result;
      })
      .then(result => {
        console.log('getBusinessesByLocation 2 firing', result)
        parseCoordinates(result);
        // if (result.length) {
        //   const allCoordinates = result.map((business: Business) => (
        //     {
        //       lat: business.coordinates.latitude,
        //       lng: business.coordinates.longitude,
        //     }
        //   ));
        //   setMarkers(allCoordinates);
        //   setMapCenter(allCoordinates[0]);
        // }
        // setCenterPhysical(`for ${location}`);
       })
      .catch(err => {
        console.log(err);
        alert("Could not execute search. Try specifying a more exact location.");
      })
  }

  // GET request to Yelp API by location coordinates
  const getBusinessesByLatLong = (latitude: string, longitude: string): void => {
    axios
      .get(`/search/${latitude}/${longitude}`)
      .then(result => result.data)
      .then(result => {
        console.log('getBusinessesByLatLong firing')
        setBusinesses(result);
        return result;
      })
      .then(result => {
        // if (result.length) {
        //   console.log('getBusinessesByLatLong 2 firing', result)
        //   const allCoordinates = result.map((business: Business) => (
        //     {
        //       lat: business.coordinates.latitude,
        //       lng: business.coordinates.longitude,
        //     }
        //   ));
        //   setMarkers(allCoordinates);
        //   setMapCenter(allCoordinates[0]);
        // }
        parseCoordinates(result);
       })
      .catch(err => { console.log(err) })
  }

  // useEffect(() => {
  //   // if (isListLoaded && isMapLoaded) {
  //   //   props.setLoading(false);
  //   // }
  //   props.setLoading(false);
  // }, [isListLoaded, isMapLoaded])

  // conditionally render once a list of businesses has been returned by Yelp API
  if (!businesses.length || props.loading) {
    return (
      <Grid
        container
        className={classes.root}
      >
        <CircularProgress color="secondary" />
      </Grid>
    )
  } else {
    return(
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        wrap="nowrap"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className={classes.root}
        >
          <SearchBar
            businesses={businesses}
            setLoading={props.setLoading}
            setCenterCoords={setCenterCoords}
            setCenterPhysical={setCenterPhysical}
            setUpdateType={setUpdateType}
          />
          <Typography className={classes.resultsText}>
            Showing results {centerPhysical}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            wrap="nowrap"
          >
            {/* <BusinessList businesses={businesses} setIsListLoaded={setIsListLoaded}/> */}
            {/* <Grid item className={classes.list}> */}
              <BusinessList businesses={businesses}/>
            {/* </Grid> */}
            <Grid
              item
              className={classes.right}
            >
              {businesses.length && markers.length
                ? <GoogleMap center={mapCenter} markers={markers} zoom={13} isMarkerShown={true} dimensions={{
                    width: "650px",
                    height: "650px"
                  }} />
                : null
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Homepage;