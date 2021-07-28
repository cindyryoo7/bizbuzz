import { useState, useEffect } from 'react';
import {
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import { Business } from '../models/business';
import BusinessList from '../view-components/BusinessList';
import { GoogleCoords } from '../models/googleCoords';
import GoogleMap from '../view-components/GoogleMap';
import SearchBar from '../controller-components/SearchBar';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    paddingBottom: "10px",
  },
  resultsText: {
    padding: "10px",
    fontStyle: "italic"
  },
  map: {
    width: "100%",
    paddingRight: "15px",
  },
}))

type Props = {
  loading: boolean,
  setLoading: (loading: boolean) => void,
}

const Homepage = (props: Props) => {
  const [centerCoords, setCenterCoords] = useState<GoogleCoords>({
    lat: 37.79118339155342,
    lng: -122.40330988014378
  }); //Twitch SF Office Location
  const [centerPhysical, setCenterPhysical] = useState<string>("for San Francisco, CA");
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [markers, setMarkers] = useState<GoogleCoords[]>([]);
  const [updateType, setUpdateType] = useState<string>("coordinates");
  const [mapCenter, setMapCenter] = useState<GoogleCoords>(centerCoords);

  const classes = useStyles();

  useEffect(() => {
    updateType === "coordinates"
      ? getBusinessesByLatLong(centerCoords.lat.toString(), centerCoords.lng.toString())
      : getBusinessesByLocation(centerPhysical)
  }, [updateType, centerCoords, centerPhysical]);

  const parseCoordinates = (listOfBusinesses: Business[]) => {
    if (listOfBusinesses.length) {
      const allCoordinates = listOfBusinesses.map((business: Business) => (
        {
          lat: business.coordinates.latitude,
          lng: business.coordinates.longitude,
        }
      ));
      setMarkers(allCoordinates);
      setMapCenter(allCoordinates[0]);
    }
  }

  // GET request to Yelp API by location in string format
  const getBusinessesByLocation = (location: string): void => {
    axios
      .get(`/search/${location}`)
      .then(result => result.data)
      .then(result => {
        setBusinesses(result);
        return result;
      })
      .then(result => {
        parseCoordinates(result);
       })
      .catch(err => {
        console.log(err);
        alert("Could not execute search. Try specifying a more exact location.");
      })
  }

  // GET request to Yelp API by location coordinates
  const getBusinessesByLatLong = (latitude: string, longitude: string): void => {
    axios
      .get(`/search/${latitude}/${longitude}`)
      .then(result => result.data)
      .then(result => {
        setBusinesses(result);
        return result;
      })
      .then(result => {
        parseCoordinates(result);
       })
      .catch(err => { console.log(err) })
  }

  // conditionally render once a list of businesses has been returned by Yelp API
  if (!businesses.length || props.loading) {
    return (
      <Grid
        container
        className={classes.root}
      >
        <CircularProgress color="secondary" />
      </Grid>
    )
  } else {
    return(
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        wrap="nowrap"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className={classes.root}
        >
          <SearchBar
            businesses={businesses}
            setLoading={props.setLoading}
            setCenterCoords={setCenterCoords}
            setCenterPhysical={setCenterPhysical}
            setUpdateType={setUpdateType}
          />
          <Typography className={classes.resultsText}>
            Showing results {centerPhysical}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            wrap="nowrap"
          >
            <BusinessList businesses={businesses}/>
            <Grid item className={classes.map}>
              {businesses.length && markers.length
                ? <GoogleMap
                    center={mapCenter}
                    markers={markers}
                    zoom={13}
                    isMarkerShown={true}
                    dimensions={{
                      width: "650px",
                      height: "650px"
                    }}
                  />
                : null
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Homepage;