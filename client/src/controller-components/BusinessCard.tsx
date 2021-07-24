import { makeStyles, Theme, Card, CardActionArea, Grid } from '@material-ui/core';
import { Business } from '../models/business';
import CardHeader from '../view-components/CardHeader';
import CardBody from '../view-components/CardBody';
import CardFooter from '../view-components/CardFooter';

const useStyles = makeStyles((theme: Theme) => ({
}))

type Props = {
  business: Business,
  index: number
}

const BusinessCard = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" style={{width:"100%"}}>
      <Card style={{height:"100%", width:"100%"}}>
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