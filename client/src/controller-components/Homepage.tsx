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
    paddingBottom: "10px"
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
  centerCoords: GoogleCoords,
  centerPhysical: string,
  // currentLocationCoords: Coordinates,
  // currentLocationPhysical: string,
  setLoading: (loading: boolean) => void,
  // setCurrentLocationCoords: (currentLocationCoords: Coordinates) => void,
  // setCurrentLocationPhysical: (currentLocationPhysical: string) => void
  setCenterCoords: (centerCoords: GoogleCoords) => void,
  setCenterPhysical: (centerPhysical: string) => void
}



const Homepage = (props: Props) => {
  // const [currentLocationCoords, setCurrentLocationCoords] = useState<Coordinates>({
  //   latitude: 37.79118339155342,
  //   longitude: -122.40330988014378
  // }); //Twitch SF Office Location

  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [markers, setMarkers] = useState<GoogleCoords[]>([]);

  const [mapCenter, setMapCenter] = useState<GoogleCoords>(props.centerCoords);

  // const [isListLoaded, setIsListLoaded] = useState<boolean>(false);
  // const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

  const classes = useStyles();

  // invokes GET requests to Yelp API if location coordinates change
  useEffect(() => {
    console.log('centerCoords useEffect firing', props.centerCoords)
    getBusinessesByLatLong(props.centerCoords.lat.toString(), props.centerCoords.lng.toString());
  }, [props.centerCoords]);

  // invokes GET requests to Yelp API if location coordinates change
  useEffect(() => {
    console.log('centerPhysical useEffect firing')
    getBusinessesByLocation(props.centerPhysical)
  }, [props.centerPhysical]);


  // pulls coordinates of all businesses returned from Yelp API
  useEffect(() => {
    if (businesses.length) {
      console.log('businesses useEffect firing', businesses)
      const allCoordinates = businesses.map(business => (
        {
          lat: business.coordinates.latitude,
          lng: business.coordinates.longitude,
        }
      ));

      setMarkers(allCoordinates);
      setMapCenter(allCoordinates[0]);
    }
  }, [businesses])

  // setMarkers([props.currentLocationCoords].concat(allCoordinates));
  // props.setCenterCoords(allCoordinates[0]);



  // GET request to Yelp API by location in string format
  const getBusinessesByLocation = (location: string): void => {
    axios
      .get(`/search/${location}`)
      .then(result => result.data)
      .then(result => {
        setBusinesses(result);
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
        setBusinesses(result);
        // setCenterPhysical('near you');
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
            setCenterCoords={props.setCenterCoords}
            setCenterPhysical={props.setCenterPhysical}
          />
          <Typography className={classes.resultsText}>
            Showing results {props.centerPhysical}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            wrap="nowrap"
          >
            {/* <BusinessList businesses={businesses} setIsListLoaded={setIsListLoaded}/> */}
            <BusinessList businesses={businesses}/>
            <Grid
              item
              className={classes.right}
            >
              {businesses.length && markers.length
                ? <GoogleMap center={mapCenter} markers={markers} zoom={12} isMarkerShown={true} dimensions={{
                    width: "49%",
                    height: "auto"
                  }}/>
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