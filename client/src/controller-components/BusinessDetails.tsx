import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid, Link } from '@material-ui/core';
import ReviewsList from '../view-components/ReviewsList';
import { BusinessDetails as Details } from '../models/businessDetails';
import { Review } from '../models/review';
import BusinessInfo from '../view-components/BusinessInfo';
import { useHistory } from 'react-router-dom';

type Props = {
  reviews: Review[],
  details: Details
}

const BusinessDetails = (props: Props) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      <Link onClick={handleBack}>{"< Back to Results"}</Link>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        wrap='nowrap'
      >
        <BusinessInfo details={props.details}/>
        <ReviewsList reviews={props.reviews}/>
      </Grid>
    </Grid>
  );

}

export default BusinessDetails;