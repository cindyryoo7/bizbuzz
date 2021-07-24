import { makeStyles, Theme, Typography, Grid } from '@material-ui/core';
import { Business } from '../models/business';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 345,
    maxWidth: 800,
    color: "blue",
    height: "100%"
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
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Typography noWrap>
          {props.business.location.display_address[0]}
        </Typography>
        <Typography noWrap>
          {props.business.location.display_address[1]}
        </Typography>
        <Typography noWrap>
          {props.business.location.display_address[2] && props.business.location.display_address[2]}
        </Typography>
      </Grid>
      <Grid container direction="column">
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