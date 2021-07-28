import {
  makeStyles,
  Box,
  Grid,
} from '@material-ui/core';
import { Business } from '../models/business';
import BusinessCard from './BusinessCard';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "10px",
    maxHeight: '665px',
    overflowY: 'scroll',
  },
  list: {
    paddingBottom: "10px",
    width: "100%"
  }
}))

type Props = {
  businesses: Business[],
}

const BusinessList = (props: Props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleNavigate = (id:string) => {
    history.push(`/business/${id}`);
  }

  if (props.businesses.length) {
    return(
      <Box className={classes.root}>
        {props.businesses.map((business, index) => (
          <Grid
            item
            key={index}
            className={classes.list}
            onClick={() => { handleNavigate(business.id) }}
          >
            <BusinessCard
              key={business.id}
              business={business}
              index={index + 1}
            />
          </Grid>
        ))}
      </Box>
    )
  } else {
    return null;
  }
}

export default BusinessList;