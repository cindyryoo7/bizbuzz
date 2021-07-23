import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles, Theme, Card, CardActionArea, Typography, Grid, Box, Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { Business } from '../models/business';
import CardHeader from '../view-components/CardHeader';
import CardBody from '../view-components/CardBody';
import CardFooter from '../view-components/CardFooter';

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