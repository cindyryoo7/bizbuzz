import {useState, useEffect} from 'react';
import axios from 'axios';
import { Business } from '../models/business';
import { Grid, CircularProgress, makeStyles, Theme, Typography } from '@material-ui/core';
import BusinessCard from './BusinessCard';
import { useHistory } from "react-router-dom";
import SearchBar from '../controller-components/SearchBar';
import GoogleMap from './GoogleMap';
import { Coordinates } from '../models/coordinates';
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
  currentLocationCoords: Coordinates,
  currentLocationPhysical: string,
  setLoading: (loading: boolean) => void,
  setCurrentLocationCoords: (currentLocationCoords: Coordinates) => void,
  setCurrentLocationPhysical: (currentLocationPhysical: string) => void
}

const Homepage = (props: Props) => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [markers, setMarkers] = useState<Coordinates[]>([]);
  const [isListLoaded, setIsListLoaded] = useState<boolean>(false);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

  const classes = useStyles();

  // invokes GET requests to Yelp API if location coordinates change
  useEffect(() => {
    getBusinessesByLatLong(props.currentLocationCoords.latitude.toString(), props.currentLocationCoords.longitude.toString());
  }, [props.currentLocationCoords]);

  // invokes GET requests to Yelp API if location coordinates change
  useEffect(() => {
    getBusinessesByLocation(props.currentLocationPhysical)
  }, [props.currentLocationPhysical]);


  // pulls coordinates of all businesses returned from Yelp API
  useEffect(() => {
    if (businesses.length) {
      const allCoordinates = businesses.map(business => (
        business.coordinates
      ));
      setMarkers([props.currentLocationCoords].concat(allCoordinates));
    }
  }, [businesses])

  // GET request to Yelp API by location in string format
  const getBusinessesByLocation = (location: string): void => {
    axios
      .get(`/search/${location}`)
      .then(result => result.data)
      .then(result => { setBusinesses(result) })
      .catch(err => {
        console.log(err);
        alert("Could not execute search, try specifying a more exact location.");
      })
  }

  // GET request to Yelp API by location coordinates
  const getBusinessesByLatLong = (latitude: string, longitude: string): void => {
    axios
      .get(`/search/${latitude}/${longitude}`)
      .then(result => result.data)
      .then(result => { setBusinesses(result) })
      .catch(err => { console.log(err) })
  }

  useEffect(() => {
    // if (isListLoaded && isMapLoaded) {
    //   props.setLoading(false);
    // }
    props.setLoading(false);
  }, [isListLoaded, isMapLoaded])

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
            setLoading={props.setLoading}
            setCurrentLocationCoords={props.setCurrentLocationCoords}
            setCurrentLocationPhysical={props.setCurrentLocationPhysical}
          />
          <Typography className={classes.resultsText}>
            Showing results {props.currentLocationPhysical}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            wrap="nowrap"
          >
            <BusinessList businesses={businesses} setIsListLoaded={setIsListLoaded}/>
            <Grid
              item
              className={classes.right}
            >
              {businesses.length && markers.length
                ? <GoogleMap setIsMapLoaded={setIsMapLoaded} markers={markers} dimensions={{
                    width: "100%",
                    height: "700px"
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