import { Grid, Card, CardActionArea, Typography, CardHeader, Avatar, makeStyles, Link } from '@material-ui/core';
import { Review as ReviewType } from '../models/review';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const useStyles = makeStyles((theme) => ({
  root: {

  },
}))

type Props = {
  review: ReviewType,
}

const Review = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{width:"90%"}}
    >
      <Card style={{height:"100%", width:"100%"}}>
        <CardActionArea>
          <Grid container justifyContent="space-between" direction="row" style={{width:"100%"}} wrap="nowrap">
            <CardHeader
              avatar={
                <Avatar alt="reviewer-avatar" src={props.review.user.image_url} />
              }
              title={props.review.user.name}
              subheader={props.review.time_created}
            >
            </CardHeader>
            <Grid container direction="row">
              <StarBorderOutlinedIcon />
              <Typography>{props.review.rating}</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography>{props.review.text}</Typography>
          </Grid>
          <Grid container direction="row" alignItems="flex-end">
            <Link href={props.review.url}>
              See more...
            </Link>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );

}

export default Review;