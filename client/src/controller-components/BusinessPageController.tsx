import { useState, useEffect } from 'react';
import {
  Grid,
  Link,
  makeStyles,
} from '@material-ui/core';
import axios from 'axios';
import BusinessDetails from '../view-components/BusinessDetails';
import { BusinessDetails as Details } from '../models/businessDetails';
import { GoogleCoords } from '../models/googleCoords';
import PhotoGallery from '../view-components/PhotoGallery';
import { Review } from '../models/review';
import { useHistory } from 'react-router-dom';

type Props = {
  mapCenter: GoogleCoords,
  setMapCenter: (mapCenter: GoogleCoords) => void
}

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    width: "100%",
  },
  link: {
    padding: "10px",
  },
  gallery: {
    width: "100%"
  }
}))

const BusinessPageController = (props: Props) => {
  const [businessId, setBusinessId] = useState<string>("");
  const [businessDetails, setBusinessDetails] = useState<Details>({} as Details);
  const [businessReviews, setBusinessReviews] = useState<Review[]>([]);

  const classes = useStyles();
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  const getBusinessDetails = (id: string) => {
    axios
      .get(`/${id}`)
      .then(result => result.data)
      .then(result => {
        setBusinessDetails(result);
        return result;
      })
      .then(result => {
        props.setMapCenter({
          lat: result.coordinates.latitude,
          lng: result.coordinates.longitude
        })
      })
      .catch(err => { console.log(err) })
  }

  const getBusinessReviews = (id: string) => {
    axios
      .get(`/${id}/reviews`)
      .then(result => result.data.reviews)
      .then(result => { setBusinessReviews(result) })
      .catch(err => { console.log(err) })
  }

  useEffect(() => {
    setBusinessId(history.location.pathname.split('/business/')[1]);
  }, [])

  useEffect(() => {
    if (businessId.length) {
      getBusinessDetails(businessId);
      getBusinessReviews(businessId);
    }
  }, [businessId])

  if (businessDetails.name && businessReviews.length) {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          className={classes.link}
        >
          <Link
            color="secondary"
            underline="always"
            onClick={handleBack}
          >
            {"< Back to Results"}
          </Link>
        </Grid>
        <Grid className={classes.gallery}>
          <PhotoGallery photos={businessDetails.photos} />
        </Grid>
        <BusinessDetails
          reviews={businessReviews}
          details={businessDetails}
          mapCenter={props.mapCenter}
        />
      </Grid>
    );
  } else {
    return null;
  }
}

export default BusinessPageController;