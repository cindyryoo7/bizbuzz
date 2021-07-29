import { useState, useEffect } from 'react';
import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Address from './Address';
import { BusinessDetails as Details } from '../models/businessDetails';
import Categories from './Categories';
import { GoogleCoords } from '../models/googleCoords';
import GoogleMapController from '../controller-components/GoogleMapController';
import Ratings from './Ratings';
import Schedule from './Schedule';
import Transactions from './Transactions';

type Props = {
  details: Details,
  setLoading: (loading: boolean) => void
}

const useStyles = makeStyles(() => ({
  root: {
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
    fontSize: "20px",
    fontWeight: "bold"
  },
  header: {
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
    if (props.details.name) {
      setCoordinates({
        lat: props.details.coordinates.latitude,
        lng: props.details.coordinates.longitude
      });
    }
  }, [props.details])

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
        <GoogleMapController
          center={coordinates}
          markers={[coordinates]}
          zoom={13}
          isMarkerShown={true}
          dimensions={{
             width: "400px",
             height: "400px"
          }}
        />
        {props.details.location && props.details.location.display_address.length
          ? <Address address={props.details.location.display_address} />
          : null
        }
        <Grid>
          {props.details.hours && props.details.hours[0].open
            ? <Schedule hours={props.details.hours[0].open}/>
            : null
          }
        </Grid>
      </Grid>
    </Grid>
  );

}

export default BusinessInfo;