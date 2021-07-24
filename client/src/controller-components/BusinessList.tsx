import {useState, useEffect} from 'react';
import axios from 'axios';
import { Business } from '../models/business';
import { Grid, CircularProgress, makeStyles, Theme, Typography } from '@material-ui/core';
import BusinessCard from './BusinessCard';
import { useHistory } from "react-router-dom";
import SearchBar from '../controller-components/SearchBar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // height: "100%",
  },
  icon: {
    // verticalAlign: "middle",
    // justifyContent: "center",
    // alignItems: "center",
    height: "100%"
  }
}))

type Props = {
  location: number[] | string,
  loading: boolean,
  setLoading: (loading: boolean) => void,
  setLocation: (location: number[] | string) => void,
}

const BusinessList = (props: Props) => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [currentLocation, setCurrentLocation] = useState<string>("for San Francisco, CA")

  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    if (props.location.length) {
      if (typeof props.location === 'string') {
        getBusinessesByLocation(props.location)
        setCurrentLocation(props.location)
      } else {
        getBusinessesByLatLong(props.location[0].toString(),props.location[1].toString());
      }
    } else {
      getBusinessesByLatLong('37.79118339155342', '-122.40330988014378');// Twitch SF office location
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
        item
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
        <Typography>Showing results {currentLocation}</Typography>
        {businesses.map((business, index) => (
          <Grid key={index} item style={{width:"70%", paddingTop: "20px"}} onClick={() => {handleNavigate(business.id)}}>
            <BusinessCard key={business.id} business={business} index={index + 1}/>
          </Grid>
        ))}
    </Grid>
    )
  }
}

export default BusinessList;