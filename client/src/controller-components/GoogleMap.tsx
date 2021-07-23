import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles, Theme, Card, CardActionArea, CardContent, Typography, Grid, Chip } from '@material-ui/core';
import { GoogleMap as Map, useJsApiLoader } from '@react-google-maps/api';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 345,
    maxWidth: 800,
    color: "blue",
    height: "100%"
  }
}))

type Props = {

}

const GoogleMap = (props: Props) => {
  const classes = useStyles();

  return (
  )
}

export default GoogleMap;