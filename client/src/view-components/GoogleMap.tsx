import {
  GoogleApiWrapper,
  Map,
  Marker,
} from 'google-maps-react';
import { Grid, makeStyles, } from '@material-ui/core';
import { GOOGLE_API_KEY } from '../.env';
import { GoogleCoords } from '../models/googleCoords';

type Props = {
  google: any,
  center: GoogleCoords,
  markers: GoogleCoords[],
  dimensions: {width: string, height: string}
  isMarkerShown: boolean,
  zoom: number,
  containerElement?: any
}

const useStyles = makeStyles({
  root: (props: Props) => ({
    height: props.dimensions.height,
    width: props.dimensions.width,
    position: "relative"
  }),
});

export const MapContainer = (props: Props) => {
  const classes = useStyles(props);

  return (
    <Grid className={classes.root}>
      <Map
        google={props.google}
        zoom={props.zoom}
        center={props.center}
        style={{
          width: props.dimensions.width,
          height: props.dimensions.height,
          position:'absolute'
        }}
      >
        {props.isMarkerShown &&
          props.markers.map((marker, index) => (
            <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
          ))
        }
      </Map>
    </Grid>
  );
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapContainer);