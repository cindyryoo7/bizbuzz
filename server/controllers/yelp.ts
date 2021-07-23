import axios from 'axios';
import { API_KEY } from '../.env';

const BASE_URL = 'https://api.yelp.com/v3/businesses';

export const getBusinesses = (latitude: string, longitude: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${BASE_URL}/search?latitude=29.7534056825545&longitude=-95.37598660914549`,
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