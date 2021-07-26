# BizBuzz

## Description
BizBuzz is a web application that shows local business details and reviews based on a specific location. This project utilizes the [Yelp Fusion API](https://www.yelp.com/developers/v3/manage_app) and [Google Maps Platform API](https://console.cloud.google.com/project/_/google/maps-apis/credentials). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run on your local machine:
### 1. Clone the repository
In your command shell, run
```sh
git clone https://github.com/cindyryoo7/bizbuzz.git
```

### 2. Obtain Yelp Fusion API Key
Follow the instructions inside `server > .env-copy.ts` to create your personal Yelp Fusion API key.

### 3. Obtain Google Maps Platform API Key
Follow the instructions inside `client > .env-copy.ts` to create your personal Google Maps Platform API key.

### 4. Install dependencies and start the server
Navigate into the server folder and run in your command shell:
```sh
npm install
```
Then run:
```sh
npm start
```
The server can be accessed at `localhost:5000`.

### 5. Start the client
Navigate into the server folder and run in your command shell:
```sh
npm install
```
Then run:
```sh
npm start
```
The client can be accessed at `localhost:3000`.

### 6. View application
Once both the client and server have started, you can view the running application at `localhost:3000`.

## Technology Stack
| Type | Technologies |
| --- | --- |
| Frontend | <img src="https://img.shields.io/badge/-JavaScript-eed718?style=flat&logo=javascript&logoColor=000000"> <img src="https://img.shields.io/badge/-TypeScript-3078c6?style=flat&logo=typescript&logoColor=ffffff"> <img src="https://img.shields.io/badge/-React-000000?style=flat&logo=react&logoColor=00c8ff"> <img src = "https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/-Material--UI-01aaf6?style=flat&logo=material-ui&logoColor=white"> |
| Backend | <img src="https://img.shields.io/badge/-Node.js-3C873A?style=flat&logo=node-js&logoColor=white"> <img src="https://img.shields.io/badge/-Express.js-787878?style=flat"> |
| Developer Tools | <img src="https://img.shields.io/badge/-Git-F1502F?style=flat&logo=git&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Github-000000?style=flat&logo=github&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visual%20studio%20code&logoColor=white"> <img src="https://img.shields.io/badge/-Amazon%20Web%20Services-f69500?style=flat&logo=amazon&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-npm-c43635?style=flat&logo=npm&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Jira-2580f7?style=flat&logo=jira&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Kanban-3C873A?style=flat&logo=kanban&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Agile-000000?style=flat&logo=agile&logoColor=FFFFFF"> |

To-DO: add Yelp and Google APIs to Developer Tools

## Project Requirements
#### 1. Use a modern JS Library/Framework like React, Angular, etc. We suggest using React.js.
This project was created using React.js and TypeScript.
#### 2. Create an application that can be interacted with in a minimum of three different ways by the user.
The user can interact with the app in the following ways:
- search for businesses based on user's current location
- search for businesses based on a specific location (e.g. San Francisco, CA)
- click on a business in the list of results which redirects to a page containing the business' details and reviews
- interact with the Google map (e.g. zoom in and out)
- click on a specific Yelp review which redirects to the review on the official Yelp page
- return back to the list of results from a specific business page

#### 3. The usage of a specified architectural pattern (MVC, MVP, MVVM,  etc.).

#### 4. Integration with a backend service developed by you.

#### 5. Integration with a 3rd party RESTful API.

#### 6. Usage of at least 5 UI components from the material-ui/@core library if you’re using React or a comparable library if you’re using another framework.

#### 7. An example of a reusable component that you have created and used in the app (e.g. UI component, service, etc).


