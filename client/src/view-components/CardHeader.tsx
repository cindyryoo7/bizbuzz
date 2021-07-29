import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Business } from '../models/business';
import Ratings from './Ratings';

const useStyles = makeStyles(() => ({
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
    width: "55%",
    padding: "5px"
  },
  right: {
    width: "45%",
    paddingTop: "10px"
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
      <Grid item className={classes.left}>
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
          <Typography noWrap align="right">
            ({props.business.review_count} reviews)
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardHeader;