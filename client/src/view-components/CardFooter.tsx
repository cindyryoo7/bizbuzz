import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles, Theme, Card, CardActionArea, CardContent, Typography, Grid, Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
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

const CardFooter = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Grid container direction="row" alignItems="center">
        <Typography>
          Categories:
        </Typography>
        {props.business.categories.map((category, index) => (
          <Chip key={index} label={category.title}/>
        ))}
      </Grid>
      {props.business.transactions.length
        ?
        <Grid container direction="row">
          <Typography>
            Transactions:
          </Typography>
          {props.business.transactions.map((transaction, index) => (
            <Chip key={index} variant="outlined" size="small" label={transaction} icon={<DoneIcon style={{fill: "green"}}/>}/>
          ))}
        </Grid>
        : null
      }
  </Grid>
  )
}

export default CardFooter;