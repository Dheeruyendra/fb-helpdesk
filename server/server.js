const express = require('express');
const cors = require('cors');
const DBConnection = require('./database/db');
const router = require('./routes/route.js');

const app = express();
const PORT = process.env.PORT || 3000;
DBConnection();

//middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials : true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(function(req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});