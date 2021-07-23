import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid, ImageList, ImageListItem, makeStyles, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    width: "100%"
  },
  imageList: {
    width: '100%',
    height: "100%",
  },
  image: {
    paddingLeft: "50px",
    paddingRight: "50px",
  }
}))

type Props = {
  photos: string[]
}

const PhotoGallery = (props: Props) => {
  const classes = useStyles();

  if (props.photos && props.photos.length) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.root}
      >
        <ImageList rowHeight={160} className={classes.imageList} cols={3}>
            {props.photos.map((photo, index) => (
              <ImageListItem key={index} cols={1} >
                <img src={photo} alt={photo+index}/>
              </ImageListItem>
            ))}
        </ImageList>
      </Grid>
    );
  } else {
    return null;
  }
}

export default PhotoGallery;