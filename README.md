# BizBuzz - Find the *buzz* about your local *biz*. #

## Table of Contents

1. [Description](#Description)
2. [Installation](#Installation)
3. [Technology Stack](#Technology-Stack)
4. [Project Requirements](#Project-Requirements)
5. [Architectural Overview](#Architectural-Overview)
6. [User Flow and Views](#User-Flow-and-Views)
7. [API Expected Behavior](#API-Expected-Behavior)
8. [Design Decisions](#Design-Decisions)
9. [Challenges and Reflections](#Challenges-and-Reflections)
10. [Planning Resources](#Planning-Resources)

## Description
BizBuzz is a web application that shows local business details and reviews based on a current user's location. This project utilizes the [Yelp Fusion API](https://www.yelp.com/developers/v3/manage_app) and [Google Maps Platform API](https://console.cloud.google.com/project/_/google/maps-apis/credentials). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Heroku deployed version of the application can be viewed [here](https://cindyryoo-bizbuzz.herokuapp.com/).

## Installation
To run on development mode on your local machine:
### 1. Clone the repository.
- In your command shell, run:
  ```sh
  git clone https://github.com/cindyryoo7/bizbuzz.git
  ```
### 2. Obtain Yelp Fusion API Key.
- Follow the instructions inside `.env-copy.ts` to create your personal Yelp Fusion API key.
### 3. Obtain Google Maps Platform API Key.
- Follow the instructions inside `client > src > .env-copy.ts` to create your personal Google Maps Platform API key.
### 4. Install client dependencies and start up React client.
- In your command shell, run:
  ```sh
  cd client
  ```
- Then run:
  ```sh
  npm install
  ```
- Then run:
  ```sh
  npm start
  ```
### 5. Install server dependencies and start up Node.js server.
- In your command shell, run:
  ```sh
  npm install
  ```
- Then run:
  ```sh
  npm start
  ```
### 6. View application on browser.
- Once both the client and server have started, you can view the running application at `localhost:3000`.

## Technology Stack
| Type | Technologies |
| --- | --- |
| Frontend | <img src="https://img.shields.io/badge/-JavaScript-eed718?style=flat&logo=javascript&logoColor=000000"> <img src="https://img.shields.io/badge/-TypeScript-3078c6?style=flat&logo=typescript&logoColor=ffffff"> <img src="https://img.shields.io/badge/-React-000000?style=flat&logo=react&logoColor=00c8ff"> <img src="https://img.shields.io/badge/-React%20Router-000000?style=flat&logo=react%20router&logoColor=ca4245"> <img src = "https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/-Material--UI-01aaf6?style=flat&logo=material-ui&logoColor=white"> |
| Backend | <img src="https://img.shields.io/badge/-Node.js-3C873A?style=flat&logoColor=white"> <img src="https://img.shields.io/badge/-Express.js-787878?style=flat"> |
| Developer Tools | <img src="https://img.shields.io/badge/-Git-F1502F?style=flat&logo=git&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Github-000000?style=flat&logo=github&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visual%20studio%20code&logoColor=white"> <img src="https://img.shields.io/badge/-npm-c43635?style=flat&logo=npm&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Agile-000000?style=flat&logo=agile&logoColor=FFFFFF"> |
| Planning | <img src="https://img.shields.io/badge/-JIRA-2580f7?style=flat&logo=jira&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Kanban-3C873A?style=flat&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Figma-f86e5f?style=flat&logo=figma&logoColor=FFFFFF"> |
| External APIs | <img src="https://img.shields.io/badge/-Yelp%20Fusion%20API-cc2222?style=flat&logo=yelp&logoColor=white"> <img src="https://img.shields.io/badge/-Google%20Maps%20Platform%20API-3f81ec?style=flat&logo=google%20maps&logoColor=white"> |
| Deployment | <img src="https://img.shields.io/badge/-Heroku-8b6baf?style=flat&logo=heroku&logoColor=FFFFFF"> |

## Project Requirements
### 1. Use a modern JS Library/Framework like React, Angular, etc. We suggest using React.js.
This project was created using React.js and TypeScript. Specifically, the frontend client was created using [Create React App](https://github.com/facebook/create-react-app).
### 2. Create an application that can be interacted with in a minimum of three different ways by the user.
The user can interact with the app in the following ways:
- search for businesses based on user's current location (using geocoordinates)
- search for businesses based on a specific physical location (e.g. San Francisco, CA)
- click on a business in the list of results, which redirects the user to a page containing the business' details and reviews
- interact with the Google map (e.g. zoom in and out)
- click on a specific Yelp review, which redirects the user to the review on the official Yelp page
### 3. The usage of a specified architectural pattern (MVC, MVP, MVVM,  etc.).
This project uses an MVC (Model, View, Controller) architecture pattern. See [Architecture Overview](#Architecture-Overview) for more information.

### 4. Integration with a backend service developed by you.
This project runs on a Node.js/Express.js server.

### 5. Integration with a 3rd party RESTful API.
This project utilizes the following 3rd party RESTful APIs:
- [Yelp Fusion API](https://www.yelp.com/developers/v3/manage_app)
- [Google Maps Platform API](https://console.cloud.google.com/project/_/google/maps-apis/credentials)

The HTTP requests to the Yelp Fusion API can be found in `controlers > yelp.ts`.
The HTTP requests to the Google Maps Platform API are carried out through an external npm library called [google-maps-react](https://github.com/fullstackreact/google-maps-react).

### 6. Usage of at least 5 UI components from the material-ui/@core library if you’re using React or a comparable library if you’re using another framework.
This project utilizes the following material-ui/@core UI components:
- Avatar
- Box
- Card
- CardActionArea
- CardHeader
- Chip
- CircularProgress
- Divider
- IconButton
- ImageList
- ImageListItem
- Link
- Grid
- Paper
- Typography

It also utilizes the following theme-related components from the material-ui/@core library:
- createTheme
- makeStyles
- ThemeProvider

Lastly, it utilizes the following icons from the material-ui/icon library:
- DoneIcon
- LocationOnOutlinedIcon
- SearchIcon

### 7. An example of a reusable component that you have created and used in the app (e.g. UI component, service, etc).
The following components are reusable components that I have created and used in the app in several locations:
- Address
  - located in: `client > src > view-components > Address.tsx`
  - rendered by:
    - BusinessInfo
    - CardBody
- Categories
  - located in: `client > src > view-components > Categories.tsx`
  - rendered by:
    - BusinessInfo
    - CardFooter
- GoogleMap
  - located in: `client > src > controller-components > GoogleMap.tsx`
  - rendered by:
    - BusinessInfo
    - Homepage
- Ratings
  - located in: `client > src > view-components > Ratings.tsx`
  - rendered by:
    - BusinessInfo
    - CardHeader
    - Review
- Transactions
  - located in: `client > src > view-components > Transactions.tsx`
  - rendered by:
    - BusinessInfo
    - CardFooter

## Architectural Overview
<!-- TODO: A high level architectural overview of your web application. e.g. names, relationships and purposes of all components and relevant data models. Brief description of the architectural design pattern that you leveraged. -->
To follow the MVC (Model, View, Controller) architecture pattern, the React components were split into two categories:
- controller components, and
- view components.

The main distinction between the two types of components are that controller components are able to access or alter the application's state, often with the use of HTTP requests to the Express server.

The application has the following controller components:
- BusinessPageController: sends a GET request to the Express server to retrieve information about a single business such as details and reviews
- GoogleMapController: sends a GET request to the Google Maps Platform API to obtain access to a Google map and markers based on geocoordinates
- HomepageController: sends a GET request to the Express server to retrieve a list of businesses from the Yelp Fusion API based on either a physical location or geocoordinates
- SearchBarController: updates the location, which triggers a GET request inside the HomepageController

The rest of the components are view components, which are rendered by either controller components or other view components. Because the view components cannot alter the application's state, they are fairly reusable and only alter state for UI-specific data and behavior. The following is a breakdown of the flow of data in the application as well as a short purpose of each component:
```sh
AppGrid (view - renders whole app)
|- Routes (view - renders multiple pages in app and allows routing)
   |- Homepage (controller - renders list of businesses from Yelp API)
      |- SearchBar (controller - allows user to change location)
      |- BusinessList (view - renders list of business cards)
         |- BusinessCard (view - renders details for a single business)
            |- CardHeader (view - renders top portion of card such as name and ratings)
               |- Ratings (view - renders rating text and filled-in icons)
            |- CardBody (view - renders middle portion of card such as address and price)
               |- Address (view - renders location of business)
            |- CardFooter (view - renders bottom portion of card such as categories and transactions)
               |- Categories (view - renders a chip for each business cateogry)
               |- Transactions (view - renders a chip for each type of business transaction)
      |- GoogleMap (view - renders a Google map with a marker on the current location)
   |- BusinessPage (controller - renders business details and reviews from Yelp API)
      |- PhotoGallery (view - renders images in a row)
      |- BusinessDetails (view - renders business information and reviews)
         |- BusinessInfo (view - renders business information such as location, hours, etc.)
            |- Ratings (view - renders rating text and filled-in icons)
            |- Categories (view - renders a chip for each business cateogry)
            |- Transactions (view - renders a chip for each type of business transaction)
            |- GoogleMap (view - renders a Google map with a marker on the current location)
            |- Address (view - renders location of business)
            |- Schedule (view - renders open business hours in a list)
         |- ReviewsList (view - renders three Yelp reviews for a business)
            |- Review (view - renders a single Yelp review with details such as date/time, review text, and reviewer name)
               |- Ratings (view - renders rating text and filled-in icons)
```

All data models/types are located in `client > src > models`. These data models define the types of data that we expect to receive from the Express server or external REST APIs.

## User Flow and Views
This application features two main views:
- Homepage
  <img src="./client/src/assets/views-screenshots/homepage.png" />
- Business Page
  <img src="./client/src/assets/views-screenshots/businesspage.png" />

The following describes the general user flow in the application:
1. User navigates to homepage, which by default contains a list of businesses near San Francisco, CA, and a Google map with markers for each business in the list. The business list contains general information for each business such as:
  - name
  - location,
  - rating (out of 5),
  - total number of reviews,
  - category of the business (e.g. type of cuisine),
  - types of transactions (i.e. takeout, delivery, etc.),
  - phone number, and
  - price in local currency (out of 4).
2. User searches for businesses in a new location in two ways:
  - search for a physical location in the search bar (e.g. "for London, England"), or
  - search based on user's current location.
3. Homepage updates the list of businesses based on the new location, and user clicks on a business in the list to find out more information about it.
4. User is redirected to the specific business page, which contains business details and reviews.

    The left half of the screen contains the details of the business, such as:
    - name,
    - rating (out of 5),
    - category of the business (e.g. type of cuisine),
    - types of transactions (i.e. takeout, delivery, etc.),
    - total number of reviews,
    - location (including Google map and marker), and
    - hours.

    The right half of the screen contains three Yelp reviews of the business, pulled directly from the business' official Yelp page. Each review contains the following:
    - Yelp reviewer avatar image,
    - Yelp reviewer display name,
    - rating (out of 5),
    - date and time the review was created,
    - brief text snippet of the review, and
    - a link to see the rest of the review on Yelp.
4. User clicks on the "See more..." link on the review.
5. User is redirected to the specific review on the official Yelp page for the business.
6. User navigates back to the list of businesses and continues to look at other businesses or locations.

## API Expected Behavior
This project utilized the Yelp Fusion REST API. I specifically accessed the following RESTful endpoints in this application. Below each endpoint is a screenshot of the expected payload and response:
- Base URL: `https://api.yelp.com/v3/businesses`
- GET `/search?latitude={latitude}&longitude={longitude}`
  <img src="./client/src/assets/api-responses/latlong.png" />
- GET `search?location={location}`
  <img src="./client/src/assets/api-responses/location.png" />
- GET `/{businessId}`
  <img src="./client/src/assets/api-responses/business.png" />
- GET `/{businessId}/reviews`
  <img src="./client/src/assets/api-responses/business-reviews.png" />

## Design Decisions
1. Search bar with option to search by physical or current location.

    The option to search by physical location was included in case the user did not want to share their location due to privacy concerns. Additionally, this allowed the user to search for businesses anywhere around the world, not just their current location, which significantly increases their search options.

    The option to search by current location was included because it would be easy for the user if they wanted to quickly find any restaurants or businesses that were local to their current location.
    <img src="./client/src/assets/designs/searchbar.png" />

2. Text underneath search bar indicating what location the results are currently showing for.

    I decided to add the text underneath the search bar to make the application for accessible for users who are reading screen readers or with impaired vision. Without this text, it may be difficult for certain users to know where these businesses are located, unless they read the location of the businesses. By adding this line, the user can immediately tell at first glance where they are seeing results for.
    <img src="./client/src/assets/designs/results-text.png" />

3. Homepage with list of businesses and map.
    I decided to base the design of my homepage based on Eater's UI because I have personally used Eater to find new restaurants and have thoroughly enjoyed Eater's user experience. Specifically, the left side of the screen is dedicated to a scrollable list of local businesses. The right side is dedicated to a Google map that shows the markers of all local businesses in the list to its right, and it does not move as the user scrolls through this list. I purposely allowed for scrolling on one side and not the other because I wanted the user to be able to look at both the map and the entire list at once.
    <img src="./client/src/assets/designs/homepage.png" />

4. Business card with general business information.
    Each business card in the list of businesses on the homepage displays general information about the business such as name, location, price, ratings and number of reviews, business category, and types of transactions. I decided to include all of this information because these are the important parts of a business that I look at before deciding to visit the physical location or click to see more information about the business. For example, the price is shown on the homepage so that users may filter out options that may be too expensive for them, the types of transactions are shown so that users may filter out options if they are specifically looking for takeout restaurants, and more.
    <img src="./client/src/assets/designs/business-card.png" />

5. Business page with three sections: image gallery, business information, and reviews.
    The business page is split into three sections: top is the image gallery, left is the business information, and right is the reviews. I decided to add the image gallery because images can help users with more impaired vision still obtain an understanding of what a business may be like. The business information section on the left includes similar information from the business card, but also displays hours so that users can see if the business is open before heading to it. The reviews section on the right provides reviews from the official Yelp website by real people so that users can obtain a better understanding of how other people have enjoyed their experience at the business. Each review also contains a link to see the rest of the review because the data returned from the Yelp Fusion API only provides a truncated version of the review text.
    <img src="./client/src/assets/designs/business-page.jpg" />

6. Rating and number of reviews display additional text.
    I had originally set up my rating and number of reviews in the following format because I thought it looked simple and clean:
    <img src="./client/src/assets/designs/ratings-reviews-trunc.png" />

    However, after doing some research on how to make my application more accessible for diverse users, I learned that it may be difficult for certain users to understand the purpose of this section. Therefore, I decided to add some additional text to show that the first number was a rating out of 5, and the second number was the total number of reviews for the business on Yelp.
    <img src="./client/src/assets/designs/ratings-reviews-full.png" />

## Challenges and Reflections
### Challenges:
- One challenge that I faced was building out a full-stack application using TypeScript. I had created applications using JavaScript before, but my first time with TypeScript turned out to be challenging as I received many errors that were new to me, and therefore, couldn't understand or know how to debug.
- Another major challenge that I faced was that I had a previous international travel commitment for a significant portion of this project period. Therefore, although I was able to work on the project at home for two days (7/22 and 7/23), the remainder of the project was completed on planes, subways, ferries, and hotels, while fighting the unreliable internet connection that comes with working in transit.

### Reflections:
- Before working on this project, I had previously identified CSS styling as an area for growth and improvement for me. I always had a difficult time styling UI components when building out projects because I would focus on rendering all my data to the browser before working on styling all my components. Because I had prior experience styling using the Material-UI library, I knew how to style my components while building out my React UI logic, which helped save a lot of time in the long run. I had a lot of fun styling this project!
- I really enjoyed working on this project because I am a huge foodie, so I could envision myself as a end user of this product. In fact, I actually used the search functionality myself to look for a restaurant near me to figure out my lunch plans.

### Improvements:
The following are improvements that I had hoped to implement but was unable to during the initial timeframe of the project. Therefore, below are features that I hope to implement in the future:
- Pressing "< Back to Results" will maintain the previous search results
- Adding an "Open now" marker for businesses that are currently open
- Adding info markers for the Google map so users can click on a marker to see the name of the business
- Implementing functionality that highlights the corresponding location marker based on the user's current location in the list of results
- Allowing users to create accounts to write their own reviews and rate local businesses

## Planning Resources
To plan for this project, the following resources were used:
- [Engineering Journal](#https://docs.google.com/document/d/1CKhBBphHTQQ_YCkehFjm18UuBx3D1x8ip9VwT9hpgXA/edit#heading=h.z9d8z74h3vo)
  - documented daily engineering work including, but not limited to:
    - bugs and/or error messages
    - detailed solution attempts for bugs
    - daily reflections
- [JIRA Kanban Board](#https://cindy-ryoo.atlassian.net/jira/software/projects/BIZ/boards/1)
  - created tickets for implementation features and bugs
- [Figma Wireframes](#https://www.figma.com/file/ADfBEOcOcOMLot7mmQICMN/BizBuzz?node-id=4%3A2)
  - created wireframes of the homepage and specific business page

