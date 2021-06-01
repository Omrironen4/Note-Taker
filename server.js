// dependencies 
const express = require('express');
const path = require('path');

// Sets up the express app

const app = express();
const PORT = process.env.PORT || 3000;

// Serts up th Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up the Express app to serve static files 
app.use(express.static('public'));

// routes 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);




// Starts the server to begin listening 

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));