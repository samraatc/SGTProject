require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// Connect to MongoDB

const dbConnection = require('./dbConnection/dbConnection');
const admin = require('./routes/LoginRoutes');

const app = express();
const port = process.env.PORT || 5000;
dbConnection();


app.use(cors());
app.use(bodyParser.json());

app.use('/api', admin)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
