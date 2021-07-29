import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Address from './Address';
import { Business } from '../models/business';

const useStyles = makeStyles(() => ({
  root: {
    padding: "5px"
  },
  details: {
    padding: "5px"
  },
  address: {
    padding: "5px"
  }
}))

type Props = {
  business: Business,
  index: number
}

const CardBody = (props: Props) => {
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
      <Grid item className={classes.address}>
        {props.business.location.display_address.length
          ? <Address address={props.business.location.display_address} />
          : null
        }
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
        className={classes.details}
      >
        <Typography noWrap>
          {props.business.display_phone}
        </Typography>
        <Typography noWrap>
          Price: {props.business.price ? props.business.price : "Unknown"}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CardBody;