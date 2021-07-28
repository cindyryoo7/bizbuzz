import {
  Card,
  CardActionArea,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { Business } from '../models/business';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

const useStyles = makeStyles(() => ({
  root: {
    width:"100%"
  },
  card: {
    height:"100%",
    width:"100%"
  }
}))

type Props = {
  business: Business,
  index: number
}

const BusinessCard = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardHeader business={props.business} index={props.index}/>
          <CardBody business={props.business} index={props.index}/>
          <CardFooter business={props.business} index={props.index}/>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default BusinessCard;