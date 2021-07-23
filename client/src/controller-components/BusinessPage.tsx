import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Business } from '../models/business';
import { Grid } from '@material-ui/core';

const BusinessPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <p>business page here</p>
    </Grid>
  );

}

export default BusinessPage;