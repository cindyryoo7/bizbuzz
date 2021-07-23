import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Business } from '../models/business';
import { Grid, CircularProgress, makeStyles, Theme } from '@material-ui/core';
import BusinessCard from './BusinessCard';

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
  location: number[],
  loading: boolean,
  setLoading: (loading: boolean) => void
}

const BusinessList = (props: Props) => {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  const classes = useStyles();

  useEffect(() => {
    if (props.location.length) {
      getBusinesses(props.location[0].toString(),props.location[1].toString());
    } else {
      getBusinesses('37.79118339155342', '-122.40330988014378');// Twitch SF office location
    }
    props.setLoading(false);
  }, [props.location]);

  const getBusinesses = (latitude: string, longitude: string): void => {
    axios
      .get(`/search/${latitude}/${longitude}`)
      .then(result => result.data)
      .then(result => { setBusinesses(result) })
      .catch(err => { console.log(err) })
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
      {businesses.map((business, index) => (
        <Grid key={index} item style={{width:"70%", paddingTop: "20px"}}>
          <BusinessCard key={business.id} business={business} index={index + 1}/>
        </Grid>
      ))}
    </Grid>
    )
  }
}

export default BusinessList;