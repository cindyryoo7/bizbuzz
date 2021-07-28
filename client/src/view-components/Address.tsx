import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: "5px"
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
      {props.address.map((address, index) => (
        <Typography key={index} noWrap>{address}</Typography>
      ))}
    </Grid>
  )
}

export default Address;