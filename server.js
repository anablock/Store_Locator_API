const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// load env variables
// take the dotenv module and call the config method, modules are objects
// since we are adding config method inside of a folder config we need to describe it inside of a object
dotenv.config({ path: './config/congig.env' });

// initialize express
const app = express();

// Body parser - to send data to the API
app.use(express.json());

// enable cors - call cors method
app.use(cors());

//
app.get('/api/v1/stores', (req, res) => {
    res.send('Hello');
});

// set a port
// to access the port: process.env.PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`));
