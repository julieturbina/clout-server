const express = require('express');
const router = express.Router();

const Event = require('../models/event');     //import {event} from the event model

                    //get event list

router.get('/events', (req, res, next) => {
    events.find(eventsList)
    .then((eventsList => {
        if (err) {
            res.json(err);
          return;
        }
        res.json(eventsList);
      })
      .catch(error => next(error))
    );
});

                    //create a new event
        
router.post('/events', function(req, res) {
  console.log('req.file ', req.file);
  const event = new Event({
    event: req.body.event,
    info: req.body.info,
    specs: req.body.specs,
    // image: `/uploads/${req.file.filename}`,
    
  });

  event.save((err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      message: 'The new event has been added!',
      event: event
    });
  });   
});

                    //get a single event

router.get('/events/:id', (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Event.findById(req.params.id)
    .then(theEvent => {
        res.json(theEvent);
    })
    .catch(error => next(error));
  });

                //edit an event

  router.put('/events/:id', (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    const updates = {
      event: req.body.event,
      info: req.body.info,
      specs: req.body.specs,
      image: req.body.image,
      
    };
  
    Event.findByIdAndUpdate(req.params.id, updates)
    .then(event => {
      res.json({
        message: 'The event has been updated successfully'
      });
    }) 
    .catch(error => next(error));     
  });

                //delete an event

  router.delete('/events/:id', (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'The id you provided is not valid' });
      return;
    }
  
    Event.remove({ _id: req.params.id })
    .then(message => {
      return res.json({
        message: 'The event has been removed from the list!'
      });
    })
    .catch(error => next(error));
    
  });

  module.exports = router;