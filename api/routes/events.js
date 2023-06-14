const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const url = 'http://localhost:3000';

const Event = require('../models/event');

/*router.get("/events", async (request, response) => {
    const users = await Event
    .find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });


router.get("/cat", (req, res, next) => {


  const uqp = req.params.cat;
    Event.find({}, { projection: { Category: uqp} })
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs); 
    })
        
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});  
  
//<URL>?query_param_name_1=value_1&query_param_name_2=value_2
*/

router.get("/", (req, res, next) => {
  Event.find()
  .then(docs => {
      console.log(docs);
      res.status(200).json(docs); 
  })

  .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
  });
});

  router.get("/:eventId", (req, res, next) => {
    const id = req.params.eventId;
    Event.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if(doc) {
            res.status(200).json(doc); 
        } else {
            res.status(404).json({message: ' Not valid entry for id'})
        }
       
    })
    .catch(err => {
        res.status(500).json({error: err});
        });
});  


module.exports = router;
