// Setup empty JS object to act as endpoint for all routes
let posts = [];

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('public'));

// Spin up the server
const port = 8000;
const server = app.listen(port, listening);

// Callback to debug
function listening() {
  console.log(`server running on localhost: ${port}`);
}
// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get('/all', function (req, res) {
  res.status(200).send(JSON.stringify(posts));
});

// Post Route
app.post('/entry', function (req, res) {
  console.log(req);
  let entry = new Entry(
    generateId(),
    new Date(),
    req.body.city,
    req.body.state,
    req.body.temperature,
    req.body.info,
    req.body.feelings
  );
  posts.push(entry);
  res.status(201).send(JSON.stringify(entry));
});

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Temp Data
class Entry {
  constructor(id, date, city, state, temperature, info, feelings) {
    this.id = id;
    this.date = date;
    this.city = city;
    this.state = state;
    this.temperature = temperature;
    this.info = info;
    this.feelings = feelings;
  }
}

const e1 = new Entry(
  generateId(),
  new Date(),
  'City',
  'ST',
  10,
  'Partly cloudy.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
);

const e2 = new Entry(
  generateId(),
  '2 April 2020',
  new Date(),
  'ST',
  10,
  'Partly cloudy.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
);

posts.push(e1);
posts.push(e2);
