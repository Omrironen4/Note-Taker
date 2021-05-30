// dependencies 
const express = require('express');
const path = require('path');

// Sets up the express app

const app = express();
const PORT = process.env.PORT || 3000;

// Serts up th Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(Express.json());







// Starts the server to begin listening 

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));