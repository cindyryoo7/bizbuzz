import {
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { BusinessDetails as Details } from '../models/businessDetails';
import BusinessInfo from './BusinessInfo';
import { GoogleCoords } from '../models/googleCoords';
import { Review } from '../models/review';
import ReviewsList from './ReviewsList';

type Props = {
  reviews: Review[],
  details: Details,
  mapCenter: GoogleCoords,
}

const useStyles = makeStyles(() => ({
  root: {
    width: "100%"
  },
}))

const BusinessDetails = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      wrap="nowrap"
      className={classes.root}
    >
      <BusinessInfo
        details={props.details}
        mapCenter={props.mapCenter}
      />
      <Divider orientation="vertical" flexItem/>
      <ReviewsList
        reviews={props.reviews}
        name={props.details.name}
        reviewCount={props.details.review_count}
      />
    </Grid>
  );
}

export default BusinessDetails;