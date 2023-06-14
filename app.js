const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const eventRoutes = require('./api/routes/events');


mongoose.connect(
    'mongodb+srv://aggelos101:appevent404@cluster0.v0iypnr.mongodb.net/EventsApp?retryWrites=true&w=majority' ,
   
    
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
  console.log("Connected successfully");
   })
 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers",
    "Origin, X-Requested_With, Content-Type, Accept, Authorization");
if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Method', ' GET, DELETE , PATCH');
    return res.status(200).json({});
}
 next();
});

//route that handles requests
app.use('/events', eventRoutes);

//error handling

app.use((req, res, next) => {
    const error = new Error('NOT FOUND');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
