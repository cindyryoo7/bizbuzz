import { Grid, Typography, Chip } from '@material-ui/core';
import { BusinessDetails as Details } from '../models/businessDetails';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import GoogleMap from '../controller-components/GoogleMap';
import { Coordinates } from '../models/coordinates';
import { useState, useEffect } from 'react';
import { Hours } from '../models/hours';

type Props = {
  hours: Hours[]
}

const Schedule = (props: Props) => {
  return (
    <Grid>
      <Typography>Hours:</Typography>
      {props.hours.length
        ?
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          wrap="nowrap"
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography>Monday:</Typography>
            <Typography>Tuesday:</Typography>
            <Typography>Wednesday:</Typography>
            <Typography>Thursday:</Typography>
            <Typography>Friday:</Typography>
            <Typography>Saturday:</Typography>
            <Typography>Sunday:</Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            {
              props.hours.map(day => (
                <Typography key={day.day} noWrap>
                  {day.start} to {day.end}
                </Typography>
              ))
            }
          </Grid>
        </Grid>
        : <Typography>No hours available.</Typography>
      }
    </Grid>
  );

}

export default Schedule;