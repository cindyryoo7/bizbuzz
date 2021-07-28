import axios from 'axios';
import { YELP_API_KEY } from '../.env'; // comment out when deploying to heroku

const BASE_URL = 'https://api.yelp.com/v3/businesses';

const API_KEY = process.env.YELP_API_KEY || YELP_API_KEY; // comment out when deploying to heroku
// const API_KEY = process.env.YELP_API_KEY; // switch to this line when deploying to heroku

export const getBusinessesByLatLong = (latitude: string, longitude: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${BASE_URL}/search?latitude=${latitude}&longitude=${longitude}`,
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}` // comment out when deploying to heroku
        // 'Authorization': `Bearer ${API_KEY}` // switch to this line when deploying to heroku
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
        'Authorization': `Bearer ${YELP_API_KEY}` // comment out when deploying to heroku
        // 'Authorization': `Bearer ${API_KEY}` // switch to this line when deploying to heroku
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
        'Authorization': `Bearer ${YELP_API_KEY}` // comment out when deploying to heroku
        // 'Authorization': `Bearer ${API_KEY}` // switch to this line when deploying to heroku
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
        'Authorization': `Bearer ${YELP_API_KEY}` // comment out when deploying to heroku
        // 'Authorization': `Bearer ${API_KEY}` // switch to this line when deploying to heroku
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