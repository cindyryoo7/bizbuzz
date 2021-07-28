import {
  ImageList,
  ImageListItem,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    flex: 1
  },
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
        >
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