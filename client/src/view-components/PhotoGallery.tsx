import { Grid, ImageList, ImageListItem, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-evenly',
    // overflow: 'hidden',
    // backgroundColor: "white"
    // height: "100%",
    // width: "100%"

  },
  imageList: {
    // width: '100%',
    // height: "100%",
    // justifyContent: 'center',
    // width: "100%"
  },
  image: {
    // paddingLeft: "50px",
    // paddingRight: "50px",
    // height: "auto",
    // width: "100%"
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
        justifyContent="center"
        alignItems="center"
        className={classes.root}
      >
        <ImageList
          gap={2}
          cols={3}
          rowHeight={300}
          className={classes.imageList}
        >
          {props.photos.map((photo, index) => (
            <ImageListItem key={index} cols={1} >
              <img src={photo} alt={photo+index} className={classes.image}/>
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