const express = require('express');
const cors = require('cors');
const DBConnection = require('./database/db');
const router = require('./routes/route.js');

const app = express();
DBConnection();
const PORT = process.env.PORT || 5000;


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
