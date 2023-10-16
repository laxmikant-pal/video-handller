const express = require('express');
const app = express();
const videoRouter = require('./routes/video');

app.use(express.json());

app.use('/video', videoRouter);

module.exports = app;
