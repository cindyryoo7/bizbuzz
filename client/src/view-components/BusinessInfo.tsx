import { Grid, Typography, Chip, makeStyles, Theme } from '@material-ui/core';
import { BusinessDetails as Details } from '../models/businessDetails';
import GoogleMap from '../controller-components/GoogleMap';
import { Coordinates } from '../models/coordinates';
import { useState, useEffect } from 'react';
import Schedule from './Schedule';
import RatingsReviews from './RatingsReviews';
import Categories from './Categories';
import Transactions from './Transactions';
import Address from './Address';

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
  }
}))

const BusinessInfo = (props: Props) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({} as Coordinates);

  const classes = useStyles();

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
      className={classes.root}
    >
      <Grid container direction="column" className={classes.header}>
        <Grid container direction="row" wrap="nowrap">
          <Typography className={classes.name} noWrap>{props.details.name}</Typography>
          <RatingsReviews rating={props.details.rating} reviewCount={props.details.review_count}/>
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
        <GoogleMap setIsMapLoaded={props.setLoading} markers={[coordinates]} dimensions={{
          width: "400px",
          height: "400px"
        }}/>
        {props.details.location && props.details.location.display_address.length
          ? <Address address={props.details.location.display_address} />
          : null
        }
      </Grid>
      {props.details.hours && props.details.hours[0].open
        ? <Schedule hours={props.details.hours[0].open}/>
        : null
      }
    </Grid>
  );

}

export default BusinessInfo;