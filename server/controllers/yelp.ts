import axios from 'axios';
import { YELP_API_KEY } from '../.env';

const BASE_URL = 'https://api.yelp.com/v3/businesses';

export const getBusinessesByLatLong = (latitude: string, longitude: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${BASE_URL}/search?latitude=${latitude}&longitude=${longitude}`,
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`
      }
    })
    .then(response => {
      resolve(response.data.businesses);
    })
    .catch(err => {
      reject(err.message);
    });
  })
};

export const getBusinessesByAddress = (location: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${BASE_URL}/search?location=${location}`,
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`
      }
    })
    .then(response => {
      resolve(response.data.businesses);
    })
    .catch(err => {
      reject(err.message);
    });
  })
};

export const getBusinessInfo = (id: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${BASE_URL}/${id}`,
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err.message);
    })
  })
}

export const getBusinessReviews = (id: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${BASE_URL}/${id}/reviews`,
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err.message);
    })
  })
}