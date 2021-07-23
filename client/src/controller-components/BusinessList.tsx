import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Business } from '../models/business';
import { Grid } from '@material-ui/core';

const BusinessList = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    getBusinesses('29.7534056825545','-95.37598660914549');
  }, [])

  const getBusinesses = (latitude: string, longitude: string): void => {
    axios
      .get(`/search/${latitude}/${longitude}`)
      .then(result => result.data)
      .then(result => { setBusinesses(result) })
      .catch(err => { console.log(err) })
  }
  if (businesses.length) {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {businesses.map(business => (
          <p>{business.name}</p>
        ))}
      </Grid>
    );
  } else {
    return null;
  }

}

export default BusinessList;