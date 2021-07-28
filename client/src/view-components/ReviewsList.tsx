import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Review as ReviewType } from '../models/review';
import Review from './Review';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    backgroundColor: "#fbe8a6",
  },
  heading: {
    fontSize: "40px",
    padding: "10px"
  },
  list: {
    width: "100%"
  }
}))

type Props = {
  reviews: ReviewType[],
  name: string,
  reviewCount: number
}

const ReviewsList = (props: Props) => {
  const classes = useStyles();

  if (props.reviews.length) {
    return (
      <Grid className={classes.root}>
        <Typography className={classes.heading}>Reviews for {props.name}:</Typography>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {props.reviews.map(review => (
            <Review
              key={review.id}
              review={review}
              reviewCount={props.reviewCount}
            />
          ))}
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
}

export default ReviewsList;