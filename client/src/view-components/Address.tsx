import { makeStyles, Theme, Typography, Grid } from '@material-ui/core';
import { Business } from '../models/business';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "5px"
  }
}))

type Props = {
  address: string[]
}

const Address = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      className={classes.root}
    >
      {props.address.map(address => (
        <Typography noWrap>{address}</Typography>
      ))}
    </Grid>
  )
}

export default Address;