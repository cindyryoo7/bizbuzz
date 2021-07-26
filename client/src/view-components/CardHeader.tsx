import { makeStyles, Theme, Typography, Grid } from '@material-ui/core';
import { Business } from '../models/business';
import Ratings from './Ratings';

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
  ratings: {
    width: "95%"
  },
  reviews: {
    paddingLeft: "5%"
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
        <Grid className={classes.ratings}>
          <Ratings rating={props.business.rating}/>
        </Grid>
        <Grid className={classes.reviews}>
          <Typography
            noWrap
            align="right"
          >
            ({props.business.review_count})
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardHeader;