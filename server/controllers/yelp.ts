import axios from 'axios';
import { API_KEY } from '../.env';

const BASE_URL = 'https://api.yelp.com/v3/businesses';

export const getBusinesses = (latitude: string, longitude: string): Promise<unknown> => {
  console.log('latitude', latitude, 'longitude', longitude)
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${BASE_URL}/search?latitude=${latitude}&longitude=${longitude}`,
      headers: {
        'Authorization': `Bearer ${API_KEY}`
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
        'Authorization': `Bearer ${API_KEY}`
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
        'Authorization': `Bearer ${API_KEY}`
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