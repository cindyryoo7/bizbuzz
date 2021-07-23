import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Business } from '../models/business';
import { Grid } from '@material-ui/core';
import { BusinessDetails as Details } from '../models/businessDetails';
import { Review } from '../models/review';
import PhotoGallery from '../view-components/PhotoGallery';
import BusinessDetails from './BusinessDetails';
import { useHistory, useParams } from "react-router-dom";

type Props = {

}

const BusinessPage = (props: Props) => {
  const [businessId, setBusinessId] = useState<string>("");
  const [businessDetails, setBusinessDetails] = useState<Details>({} as Details);
  const [businessReviews, setBusinessReviews] = useState<Review[]>([]);
  const history = useHistory();

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
      <Grid
        style={{width: "100%"}}
      >
        <PhotoGallery photos={businessDetails.photos} />
      </Grid>
      <Grid>
        <BusinessDetails reviews={businessReviews} details={businessDetails}/>
      </Grid>
    </Grid>
  );

}

export default BusinessPage;