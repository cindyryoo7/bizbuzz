import {
  Chip,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(() => ({
  container: {
    padding: "5px"
  },
  text: {
    paddingRight: "5px"
  },
  chip: {
    marginRight: "5px"
  }
}))

type Props = {
  transactions: string[]
}

const Transactions = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      className={classes.container}
    >
      <Typography className={classes.text}>Transactions:</Typography>
      {props.transactions.map((transaction, index) => (
        <Chip
          key={index}
          variant="outlined"
          size="small"
          label={transaction}
          icon={<DoneIcon style={{fill: "green"}}/>}
          className={classes.chip}
        />
      ))}
    </Grid>
  )
}

export default Transactions;