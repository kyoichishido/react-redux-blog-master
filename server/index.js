// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
// const cors = require('cors');  // we don't need it anymore, because we use proxy server instead

// DB Setup (connect mongoose and instance of mongodb)
mongoose.connect('mongodb://localhost:27017'); //mongodb://localhost:blog/blog
//(NOTE: ATLAS)const DB = 'mongodb+srv://RoronoaZoro:RoronoaZoro@cluster0.hhmwm.mongodb.net/Forumsite?retryWrites=true&w=majority'
//(NOTE: ATLAS)mongoose.connect(DB, {
//(NOTE: ATLAS)    useNewUrlParser: true,
//(NOTE: ATLAS)    useCreateIndex: true,
//(NOTE: ATLAS)    useUnifiedTopology: true,
//(NOTE: ATLAS)    useFindAndModify: false
//(NOTE: ATLAS) }).then(() => {
//(NOTE: ATLAS)    console.log("made connection");
//(NOTE: ATLAS) }).catch((err) => console.log('db connection error'));


// App Setup (morgan and body-parser are middleware in Express)
app.use(morgan('combined'));  // middleware for logging
app.use(bodyParser.json({ type: '*/*' }));  // middleware for helping parse incoming HTTP requests

//(NOTE: ATLAS) const middleware = (req, res, next) => {
//(NOTE: ATLAS)    console.log('Hello my middleware');
//(NOTE: ATLAS)    next();
//(NOTE: ATLAS)}

// app.use(cors());  // middleware for circumventing (规避) cors error

// Router Setup
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);