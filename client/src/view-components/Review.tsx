import { Grid, Card, CardActionArea, Typography, CardHeader, Avatar, makeStyles, Link } from '@material-ui/core';
import { Review as ReviewType } from '../models/review';
import Ratings from './Ratings';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  card: {
    // backgroundColor: "#fbe8a6",
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
              avatar={
                <Avatar alt="reviewer-avatar" src={props.review.user.image_url} />
              }
              title={props.review.user.name}
              subheader={props.review.time_created}
            >
            </CardHeader>
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
            <Link href={props.review.url} color="secondary" underline="hover">
              See more...
            </Link>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );

}

export default Review;