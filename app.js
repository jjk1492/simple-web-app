const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const users = require('./routes/users.js');

const mongoose = require('mongoose');
const config = require('./config/database');


const PORT = (process.env.PORT || 8080)

// Connect to the database 
mongoose.connect(config.database, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


// Handle a successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});

// Handle a connection error
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

// Enable body parser and cors for easier routing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


app.use('/users', users);

/*Adds the react production build to serve react requests*/
app.use(express.static(path.join(__dirname, 'build')));

/*React root*/
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'build/index.html'));
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));