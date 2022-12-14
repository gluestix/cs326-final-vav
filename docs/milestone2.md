# Milestone 2

## Project API Planning

For our project we've created three RESTful API's through the use of Express.js. 

The first API serves as our endpoint for user login and authentication. When a user attempts to log in with their entered email address and password, this information will be received in the form of a POST request and checked against existing users in the database. Each user is assigned an index i, and upon successful login the user will be redirected to .../users/i.

The second API serves as our endpoint for providing chart information to the user. When a user attempts to view a specific plant p's chart, they will make a request to the server for .../users/i/crop?=p and in turn will receive the chart data for that plant. This data will be received in the form of a POST request containing a stringified JSON object.

The third API serves as our endpoint for user customization, such as adding/removing specific plants views to/from their profile. Adding plant views will be received in the form of POST requests, and upon receiving the request a new crop will be created and stored in the backend database as a JSON object. Removing plant views will be received in the form of DELETE requests, and upon receiving this request the plant's JSON object will be removed from the database. This API will also handle new user creation: requests will be received from ...users/new and a new user will be subsequently stored in the database. Users are stored as JSON objects containing their email address, password, and crop data.

Below is a flow chart demonstrating these three API endpoints:

![API Flowchart](./img/API_flowchart.png)

## Front-end Implementation

- CREATE
The create account page adds a new enrty in the form of a user. ![New user page](./img/create.jpg)

- READ
The data used to form the graph is retrieved from existing enteries. ![Graph data](./img/read.jpg)

- UPDATE
The add plant button leads to a page where you can page that adds plants to existing users.  ![add plant](./img/update.jpg) ![new plant](./img/update_plant.jpg)

- DELETE
Delete button allows users to remove plants ![remove plant](./img/delete.jpg)

## Deployment

Website link https://haybale.herokuapp.com/ <br />
test email: farmer@test.com <br />
test password: password <br />

## Breakdown of Division of Labor

we used a private slack channel to communicate, we also met in person at the library

### Logan Mimaroglu

Worked with group to plan out API. Refactored project to express js strategic structure. Implemented Chart API and attached front end to dynamically load returned chart data into graphs using Express JS and EJS templating. Deployed project on Heroku.

### Stephen Lee

Worked with group to plan out API. Implemented the dashboard sidebar to dynamically display all plants a user has attached to their account using express js routing and EJS templating.

### Justin Szymanski

Worked with group to plan out API. Added functionality for adding/removing plant views to a users account using Express JS routing and EJS templating. Fixed page references. Completed technical write-up of the software architecture and API. 
