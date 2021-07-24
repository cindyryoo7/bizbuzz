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
  location: Coordinates | string,
  loading: boolean,
  setLoading: (loading: boolean) => void,
  setLocation: (location: Coordinates | string) => void,
}

const BusinessList = (props: Props) => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [currentLocation, setCurrentLocation] = useState<string>("for San Francisco, CA")
  const [defaultLocation, setDefaultLocation] = useState<Coordinates>({
    latitude: 37.79118339155342,
    longitude: -122.40330988014378
  }); // Twitch SF office location

  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    if (typeof props.location === 'string') {
      getBusinessesByLocation(props.location)
      setCurrentLocation(props.location)
    } else if (props.location.latitude){
      getBusinessesByLatLong(props.location.latitude.toString(), props.location.longitude.toString());
      setDefaultLocation({
        latitude: props.location.latitude,
        longitude: props.location.longitude
      });
    } else {
      getBusinessesByLatLong(defaultLocation.latitude.toString(), defaultLocation.longitude.toString());
    }
    props.setLoading(false);
  }, [props.location]);

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

  const getBusinessesByLatLong = (latitude: string, longitude: string): void => {
    axios
      .get(`/search/${latitude}/${longitude}`)
      .then(result => result.data)
      .then(result => { setBusinesses(result) })
      .catch(err => { console.log(err) })
  }

  const handleNavigate = (id:string) => {
    history.push(`/business/${id}`);
  }

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
            setLocation={props.setLocation}
            setLoading={props.setLoading}
            setCurrentLocation={setCurrentLocation}
          />
          <Typography className={classes.resultsText}>
            Showing results {currentLocation}
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
              <GoogleMap locations={businesses} location={defaultLocation} dimensions={{
                width: "100%",
                height: "700px"
              }}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default BusinessList;