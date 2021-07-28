import { Grid, makeStyles, } from '@material-ui/core';
import { Business } from '../models/business';
import Categories from './Categories';
import Transactions from './Transactions';

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: "5px",
    paddingBottom: "10px"
  },
}))

type Props = {
  business: Business,
  index: number
}

const CardFooter = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
    >
      {props.business.categories.length
        ? <Categories categories={props.business.categories}/>
        : null
      }
      {props.business.transactions.length
        ? <Transactions transactions={props.business.transactions}/>
        : null
      }
    </Grid>
  )
}

export default CardFooter;