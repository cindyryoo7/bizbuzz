import { makeStyles, Theme, Typography, Grid } from '@material-ui/core';
import { Business } from '../models/business';
import Address from './Address';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "5px"
  },
  details: {
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
      {props.business.location.display_address.length
        ? <Address address={props.business.location.display_address} />
        : null
      }
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