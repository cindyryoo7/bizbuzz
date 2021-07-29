import { useState } from 'react';

import {
  GoogleApiWrapper,
  Map,
  Marker,
} from 'google-maps-react';
import { Grid, makeStyles, } from '@material-ui/core';
import { GOOGLE_API_KEY } from '../.env';
import { GoogleCoords } from '../models/googleCoords';
import { useEffect } from 'react';

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

export const GoogleMapController = (props: Props) => {
  const [mapCenter, setMapCenter] = useState<GoogleCoords>(props.center);

  const classes = useStyles(props);

  useEffect(() => {
    setMapCenter(props.center);
  }, [props.center]);

  return (
    <Grid className={classes.root}>
      <Map
        google={props.google}
        zoom={props.zoom}
        center={mapCenter}
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
  apiKey: process.env.GOOGLE_API_KEY || GOOGLE_API_KEY
})(GoogleMapController);