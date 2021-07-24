import { makeStyles, Theme, Typography, Grid } from '@material-ui/core';
import { Business } from '../models/business';
import Ratings from './Ratings';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: "5px"
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
    width: "60%"
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
        <Ratings rating={props.business.rating}/>
        {/* <Grid item direction="row" justifyContent="center" alignItems="center" wrap="nowrap"> */}
          <Typography
            color="secondary"
            component="p"
            noWrap
            className={classes.reviews}
          >
            {props.business.review_count}
          </Typography>
        {/* </Grid> */}
      </Grid>
    </Grid>
  )
}

export default CardHeader;