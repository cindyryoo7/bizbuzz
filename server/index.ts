import cors from 'cors';
import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import {
  getBusinesses,
  getBusinessInfo,
  getBusinessReviews
} from './controllers/yelp';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get(`/search/:latitude/:longitude`, (req: express.Request, res: express.Response) => {
  getBusinesses(req.params.latitude, req.params.longitude)
    .then(response => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(`Error retrieving list of businesses: ${err}`);
    })
})

app.get(`/business/:id`, (req: express.Request, res: express.Response) => {
  getBusinessInfo(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(`Error retrieving specific business info: ${err}`)
    })
})

app.get(`/business/:id/reviews`, (req: express.Request, res: express.Response) => {
  getBusinessReviews(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(`Error retrieving business reviews: ${err}`)
    })
})

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`);
});

module.exports = app;