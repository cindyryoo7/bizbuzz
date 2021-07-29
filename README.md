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

2. [User-Stories](#User-Stories)

4. [Front-End](#Front-End)
5. [Deployment](#Deployment)
6. [Work-Flow](#Work-Flow)
7. [Lessons-Learned](#Lessons-Learned)
8. [Contributors](#Contributors)
9.


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
TODO: A high level architectural overview of your web application. e.g. names, relationships and purposes of all components and relevant data models. Brief description of the architectural design pattern that you leveraged.

## User Flow and Views
TODO: Screenshots of each View and descriptions of the overall user flow as well as any place that you made distinct design decisions.  (Screenshots can be taken via any screenshot capture application or native methods).

## API Expected Behavior
TODO: There should also be documentation to describe the expected payload and response for at least one route of the REST API.

## Design Decisions
TODO: Screenshots of the app where distinct design decisions were made should also be included.

## Challenges and Reflections

TODO: challenges and reflections (and engineering journal)

## Planning Resources
TODO: links to resources

