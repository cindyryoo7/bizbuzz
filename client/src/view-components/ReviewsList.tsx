import { Grid, Typography } from '@material-ui/core';
import { Review as ReviewType } from '../models/review';
import Review from './Review';

type Props = {
  reviews: ReviewType[],
}

const ReviewsList = (props: Props) => {

  if (props.reviews.length) {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{width: "100%"}}
      >
        <Typography>Reviews:</Typography>
        {props.reviews.map(review => (
          <Review key={review.id} review={review}/>
        ))}
      </Grid>
    );
  } else {
    return null;
  }

}

export default ReviewsList;