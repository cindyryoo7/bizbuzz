import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid, Link } from '@material-ui/core';
import { BusinessDetails as Details } from '../models/businessDetails';
import { Review } from '../models/review';
import PhotoGallery from '../view-components/PhotoGallery';
import BusinessDetails from './BusinessDetails';
import { useHistory } from "react-router-dom";

type Props = {
  setLoading: (loading: boolean) => void
}

const BusinessPage = (props: Props) => {
  const [businessId, setBusinessId] = useState<string>("");
  const [businessDetails, setBusinessDetails] = useState<Details>({} as Details);
  const [businessReviews, setBusinessReviews] = useState<Review[]>([]);
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
    >
      <Grid container direction="row" alignItems="flex-start">
        <Link onClick={handleBack} color="secondary">{"< Back to Results"}</Link>
      </Grid>
      <Grid
        style={{width: "100%"}}
      >
        <PhotoGallery photos={businessDetails.photos} />
      </Grid>
      <BusinessDetails reviews={businessReviews} details={businessDetails} setLoading={props.setLoading}/>
    </Grid>
  );

}

export default BusinessPage;