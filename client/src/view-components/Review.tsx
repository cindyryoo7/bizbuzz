import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  Grid,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import Ratings from './Ratings';
import { Review as ReviewType } from '../models/review';


const useStyles = makeStyles(() => ({
  root: {
    width: "90%",
  },
  card: {
    height: "100%",
    width: "100%",
    margin: "10px"
  },
  content: {
    padding: "10px"
  },
  header: {
    width: "100%",
  },
  text: {
    padding: "10px"
  },
  link: {
    width: "100%",
    padding: "10px"
  }
}))

type Props = {
  review: ReviewType,
  reviewCount: number
}

const Review = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Card className={classes.card}>
        <CardActionArea className={classes.content}>
          <Grid
            container
            justifyContent="space-between"
            direction="row"
            wrap="nowrap"
            className={classes.header}
          >
            <CardHeader
              avatar={ <Avatar alt="reviewer-avatar" src={props.review.user.image_url} />}
              title={<Typography noWrap>{props.review.user.name}</Typography>}
              subheader={<Typography noWrap>{moment(props.review.time_created).format("MMMM D, YYYY [at] LT")}</Typography>}
            />
            <Ratings rating={props.review.rating}/>
          </Grid>
          <Typography className={classes.text}>{props.review.text}</Typography>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-end"
            className={classes.link}
          >
            <Link
              href={props.review.url}
              color="secondary"
              underline="hover"
            >
              See more...
            </Link>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Review;