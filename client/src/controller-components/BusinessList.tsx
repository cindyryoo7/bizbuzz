import {useState, useEffect} from 'react';
import axios from 'axios';
import { Business } from '../models/business';
import { Grid, CircularProgress, makeStyles, Theme, Typography, Box } from '@material-ui/core';
import BusinessCard from './BusinessCard';
import { useHistory } from "react-router-dom";
import SearchBar from '../controller-components/SearchBar';
import GoogleMap from './GoogleMap';
import { Coordinates } from '../models/coordinates';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "10px",
    maxHeight: '665px',
    overflowY: 'scroll',
  },
  list: {
    paddingBottom: "10px",
    width: "100%"
  }
}))

type Props = {
  businesses: Business[],
  // setIsListLoaded: (isListLoaded: boolean) => void
}

const BusinessList = (props: Props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleNavigate = (id:string) => {
    history.push(`/business/${id}`);
  }

  // useEffect(() => {
  //   console.log('props.businesses', props.businesses)
  // }, [props.businesses])

  if (props.businesses.length) {
    // props.setIsListLoaded(true);
    return(
      <Box
        // container
        // direction="column"
        // alignItems="flex-start"
        className={classes.root}
      >
        {props.businesses.map((business, index) => (
          <Grid
            item
            key={index}
            className={classes.list}
            onClick={() => {handleNavigate(business.id)}}
          >
            <BusinessCard key={business.id} business={business} index={index + 1}/>
          </Grid>
        ))}
      </Box>
    )
  } else {
    return null;
  }
}

export default BusinessList;