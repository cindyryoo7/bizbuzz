import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid, Link, Typography, Chip } from '@material-ui/core';
import { BusinessDetails as Details } from '../models/businessDetails';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import GoogleMap from '../controller-components/GoogleMap';

type Props = {
  details: Details
}

const BusinessInfo = (props: Props) => {

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      <Grid container direction="column">
        <Grid container direction="row">
          <Typography>{props.details.name}</Typography>
          <Grid>
            <StarBorderOutlinedIcon />
            <Typography>{props.details.review_count}</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row">
          {props.details.categories && props.details.categories.length
            ? props.details.categories.map((category, index) => (
              <Chip key={index} label={category.title}/>
            ))
            : null
          }
        </Grid>
      </Grid>
      <Grid>
        <Typography>Location</Typography>
        <GoogleMap location={props.details.coordinates}/>
        {props.details.location
        ? props.details.location.display_address.map((address, index) => (
            <Typography key={index}>{address}</Typography>
          ))
        : null
      }
      </Grid>

      <Grid>

      </Grid>
    </Grid>
  );

}

export default BusinessInfo;