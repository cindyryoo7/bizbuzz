import { Grid, Typography, Chip, makeStyles, Theme } from '@material-ui/core';
import { BusinessDetails as Details } from '../models/businessDetails';
import GoogleMap from '../controller-components/GoogleMap';
import { Coordinates } from '../models/coordinates';
import { useState, useEffect } from 'react';
import Schedule from './Schedule';
import Ratings from './Ratings';
import Categories from './Categories';
import Transactions from './Transactions';
import Address from './Address';
import { GoogleCoords } from '../models/googleCoords';


type Props = {
  details: Details,
  setLoading: (loading: boolean) => void
}


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // borderRight: "1px grey solid"
    backgroundColor: "white"
  },
  name: {
    fontSize: "40px",
    width: "100%",
    padding: "5px"
  },
  location: {
    padding: "5px"
  },
  heading: {
    fontSize: "20px"
  },
  header: {
    // backgroundColor: "white"
    width: "100%"
  },
  ratings: {
    paddingRight: "5px"
  }
}))

const BusinessInfo = (props: Props) => {
  const [coordinates, setCoordinates] = useState<GoogleCoords>({} as GoogleCoords);

  const classes = useStyles();

  useEffect(() => {
    // console.log('name', props.details.name);
    if (props.details.name) {
      setCoordinates({
        lat: props.details.coordinates.latitude,
        lng: props.details.coordinates.longitude
      });
    }
  }, [props.details])

  // useEffect(() => {
  //   console.log('coordinates', coordinates);
  // }, [coordinates])


  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid
        container
        direction="column"
        className={classes.header}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item>
            <Typography className={classes.name} noWrap>{props.details.name}</Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            wrap="nowrap"
            className={classes.ratings}
          >
            <Grid>
              <Ratings rating={props.details.rating}/>
            </Grid>
            &nbsp;
            <Grid>
              <Typography
                noWrap
                align="right"
              >
                ({props.details.review_count})
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {props.details.categories && props.details.categories.length
          ? <Categories categories={props.details.categories}/>
          : null
        }
        {props.details.transactions && props.details.transactions.length
          ? <Transactions transactions={props.details.transactions}/>
          : null
        }
      </Grid>
      <Grid className={classes.location}>
        <Typography className={classes.heading}>Location:</Typography>
        {/* <GoogleMap center={coordinates} markers={[coordinates]} zoom={13} isMarkerShown={true} dimensions={{
          width: "400px",
          height: "400px"
        }}/> */}
        <GoogleMap center={coordinates} markers={[coordinates]} zoom={13} isMarkerShown={true}
           dimensions={{
          width: "400px",
          height: "400px"
        }}/>
        {props.details.location && props.details.location.display_address.length
          ? <Address address={props.details.location.display_address} />
          : null
        }
      </Grid>
      <Grid>
        {props.details.hours && props.details.hours[0].open
          ? <Schedule hours={props.details.hours[0].open}/>
          : null
        }
      </Grid>
    </Grid>
  );

}

// containerElement={<div style={{ height: `400px` }} />}

export default BusinessInfo;