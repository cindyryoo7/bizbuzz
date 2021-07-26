import { Grid, makeStyles, Theme, Divider } from '@material-ui/core';
import ReviewsList from '../view-components/ReviewsList';
import { BusinessDetails as Details } from '../models/businessDetails';
import { Review } from '../models/review';
import BusinessInfo from '../view-components/BusinessInfo';

type Props = {
  reviews: Review[],
  details: Details,
  setLoading: (loading: boolean) => void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundColor: "white",
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
      className={classes.root}
      wrap="nowrap"
    >
      <BusinessInfo details={props.details} setLoading={props.setLoading}/>
      <Divider orientation="vertical" flexItem/>
      <ReviewsList reviews={props.reviews} name={props.details.name} reviewCount={props.details.review_count}/>
    </Grid>
  );

}

export default BusinessDetails;