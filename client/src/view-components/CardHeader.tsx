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

const CardHeader = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Typography color="secondary" component="p">
          {props.index}. {props.business.name}
      </Typography>
      <Typography color="secondary" component="p">
        {props.business.rating}
      </Typography>
      <Typography color="secondary" component="p">
        {props.business.review_count}
      </Typography>
    </Grid>
  )
}

export default CardHeader;