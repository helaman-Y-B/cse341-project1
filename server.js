require('dotenv').config();
const mongodb = require('./mongodb/connection')
const express = require('express');
const getContactsRoute = require('./routes/getContacts')
const getSingleContactRoute = require('./routes/getSingleContact')

const app = express();

const PORT = process.env.PORT || 3000;

// Use routes for the APIs
app.use('/getContacts', getContactsRoute);
app.use('/getSingleContact', getSingleContactRoute);

// Use the main route
app.use('/', (req, res) => {
    res.send("Hello, this service only have /getContacts and /getSingleContact/id | Try it! IDs: 68ba1ed6fb6df47f3092acb0, 68ba1f42fb6df47f3092acb1, 68ba2092fb6df47f3092acb3");
});

// Start the database connection
mongodb.startConnection((error) => {
    if (!error) {
        // If there is an error, then starts the web page
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
        console.log('Connection to db made');
    } else {
        // If there is an error, then show error message
        console.error("Failed to make a connection to MongoDB:", error);
    };
});