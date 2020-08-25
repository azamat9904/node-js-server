const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const generalController = require('./controller/generalController');
const userRoutes = require('./routes/userRoute');

app.use(bodyParser.json());

app.use(generalController.setHeaders);

app.use('/users', userRoutes);

app.use(generalController.notFound);

module.exports = app;
