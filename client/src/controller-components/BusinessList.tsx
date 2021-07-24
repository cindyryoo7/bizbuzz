import {useState, useEffect} from 'react';
import axios from 'axios';
import { Business } from '../models/business';
import { Grid, CircularProgress, makeStyles, Theme, Typography } from '@material-ui/core';
import BusinessCard from './BusinessCard';
import { useHistory } from "react-router-dom";
import SearchBar from '../controller-components/SearchBar';
import GoogleMap from './GoogleMap';
import { Coordinates } from '../models/coordinates';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "10px"
  },
  resultsText: {
    padding: "10px",
    fontStyle: "italic"
  },
  left: {
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "10px",
  },
  right: {
    width: "100%",
    paddingRight: "15px",
  },
  list: {
    paddingBottom: "10px",
    width: "100%"
  }
}))

type Props = {
  loading: boolean,
  currentLocationCoords: Coordinates,
  currentLocationPhysical: string,
  setLoading: (loading: boolean) => void,
  setCurrentLocationCoords: (currentLocationCoords: Coordinates) => void,
  setCurrentLocationPhysical: (currentLocationPhysical: string) => void
}

const BusinessList = (props: Props) => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [markers, setMarkers] = useState<Coordinates[]>([]);
  // const [currentLocation, setCurrentLocation] = useState<string>("for San Francisco, CA")
  // const [defaultLocation, setDefaultLocation] = useState<Coordinates>({
  //   latitude: 37.79118339155342,
  //   longitude: -122.40330988014378
  // }); // Twitch SF office location

  const classes = useStyles();
  let history = useHistory();

  // invokes GET requests to Yelp API if location coordinates change
  useEffect(() => {
    // if (props.currentLocationCoords) {
      getBusinessesByLatLong(props.currentLocationCoords.latitude.toString(), props.currentLocationCoords.longitude.toString());
      props.setLoading(false);
    // }
  }, [props.currentLocationCoords]);

  // invokes GET requests to Yelp API if location coordinates change
  useEffect(() => {
    getBusinessesByLocation(props.currentLocationPhysical)
    props.setLoading(false);
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

  // reroutes user to specific business page with details and reviews
  const handleNavigate = (id:string) => {
    history.push(`/business/${id}`);
  }

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
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              className={classes.left}
            >
              {businesses.map((business, index) => (
                <Grid
                  item
                  key={index}
                  className={classes.list}
                  onClick={() => {handleNavigate(business.id)}}
                >
                  <BusinessCard key={business.id} business={business} index={index + 1}/>
                </Grid>
              ))}
            </Grid>
            <Grid
              item
              className={classes.right}
            >

              {businesses.length && markers.length
                ? <GoogleMap markers={markers} dimensions={{
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

export default BusinessList;