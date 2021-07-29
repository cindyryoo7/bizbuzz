import {
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { BusinessDetails as Details } from '../models/businessDetails';
import BusinessInfo from './BusinessInfo';
import { Review } from '../models/review';
import ReviewsList from './ReviewsList';

type Props = {
  reviews: Review[],
  details: Details,
  setLoading: (loading: boolean) => void
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
      <BusinessInfo details={props.details} setLoading={props.setLoading}/>
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