import { makeStyles, Theme, Typography, Grid } from '@material-ui/core';
import { Business } from '../models/business';
import RatingsReviews from './RatingsReviews';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    padding: "5px",
    paddingTop: "10px"
  },
  name: {
    fontSize: "22px",
  },
  rating: {
    width: "70%"
  },
  reviews: {
    width: "30%",
    align: "left",
    paddingLeft: "5px"
  },
  left: {
    width: "60%",
    padding: "5px"
  },
  right: {
    width: "40%"
  }
}))

type Props = {
  business: Business,
  index: number
}

const CardHeader = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid
        item
        className={classes.left}
      >
        <Typography
          color="secondary"
          component="p"
          className={classes.name}
          noWrap
        >
            {props.index}. {props.business.name}
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        wrap="nowrap"
        className={classes.right}
      >
        <RatingsReviews rating={props.business.rating} reviewCount={props.business.review_count}/>
      </Grid>
    </Grid>
  )
}

export default CardHeader;