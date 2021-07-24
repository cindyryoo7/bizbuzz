import { Grid } from '@material-ui/core';
import ReviewsList from '../view-components/ReviewsList';
import { BusinessDetails as Details } from '../models/businessDetails';
import { Review } from '../models/review';
import BusinessInfo from '../view-components/BusinessInfo';

type Props = {
  reviews: Review[],
  details: Details
}

const BusinessDetails = (props: Props) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
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