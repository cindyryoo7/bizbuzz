import { useState, useEffect } from 'react';
import {
  Grid,
  Link,
  makeStyles,
} from '@material-ui/core';
import axios from 'axios';
import BusinessDetails from '../view-components/BusinessDetails';
import { BusinessDetails as Details } from '../models/businessDetails';
import PhotoGallery from '../view-components/PhotoGallery';
import { Review } from '../models/review';
import { useHistory } from 'react-router-dom';

type Props = {
  setLoading: (loading: boolean) => void
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

const BusinessPage = (props: Props) => {
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
      .then(result => { setBusinessDetails(result) })
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
        setLoading={props.setLoading}
      />
    </Grid>
  );
}

export default BusinessPage;