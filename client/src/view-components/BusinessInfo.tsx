import { Grid, Typography, Chip } from '@material-ui/core';
import { BusinessDetails as Details } from '../models/businessDetails';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import GoogleMap from '../controller-components/GoogleMap';
import { Coordinates } from '../models/coordinates';
import { useState, useEffect } from 'react';

type Props = {
  details: Details
}

const BusinessInfo = (props: Props) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({} as Coordinates);

  useEffect(() => {
    if (props.details.name) {
      setCoordinates(props.details.coordinates);
    }
  }, [props.details])


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
        <Typography>Location:</Typography>

        <GoogleMap markers={[coordinates]} dimensions={{
          width: "400px",
          height: "400px"
        }}/>


        {props.details.location
          ? props.details.location.display_address.map((address, index) => (
              <Typography key={index}>{address}</Typography>
            ))
          : null
        }
      </Grid>
      <Grid>
        <Typography>Hours:</Typography>
        {props.details.hours && props.details.hours[0].open.length
          ?
          <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start" wrap="nowrap">
            <Grid container direction="column" justifyContent="center" alignItems="flex-start">
              <Typography>Monday:</Typography>
              <Typography>Tuesday:</Typography>
              <Typography>Wednesday:</Typography>
              <Typography>Thursday:</Typography>
              <Typography>Friday:</Typography>
              <Typography>Saturday:</Typography>
              <Typography>Sunday:</Typography>
            </Grid>
            <Grid container direction="column" justifyContent="center" alignItems="flex-start">
              {props.details.hours && props.details.hours[0].open.length
                ? props.details.hours[0].open.map(day => (
                  <Typography key={day.day} noWrap>{day.start} to {day.end}</Typography>
                ))
                : null
              }
            </Grid>
          </Grid>
          : <Typography>No hours available.</Typography>
        }
      </Grid>
    </Grid>
  );

}

export default BusinessInfo;