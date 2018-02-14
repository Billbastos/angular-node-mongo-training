var express = require('express');
var router = express.Router();

var Message = require('../models/message'); // Mongoose Obj

/* Fetch Data from Mongo through Mongoose find method */
router.get('/', function(req, res, next) {
  Message.find()
    .exec(function(err, messages){
      if(err) {
        return res.status(500).json({
          message: 'An error occurred',
          error: err
        })
      }
      res.status(200).json({
        message: 'Success',
        obj: messages
      })
    })
});

/* Add data in MongoDB through Mongoose save method */
router.post('/', function (req, res, next){
    var message = new Message({
      content: req.body.content
    }) 
    message.save(function(err, result) {
      if(err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(201).json({
        message: 'Saved Message',
        obj: result
      })
    });
});

/* update just the field changed 'content' from message */
router.patch('/:id', function(req, res, next) {
  Message.findById(req.params.id, function(err, message) {
    if(err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      })
    }
    if(!message) {
      return res.status(500).json({
        title: 'No message Found!',
        error: {message: 'Message not found'}
      });
    }
    message.content = req.body.content;
    message.save(function(err, result){
      if(err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Updated Message',
        obj: result
      })
    })
  })
})

router.delete('/:id', function(req, res, next){
  Message.findById(req.params.id, function(err, message) {
    if(err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      })
    }
    if(!message) {
      return res.status(500).json({
        title: 'No message Found!',
        error: {message: 'Message not found'}
      });
    }
    message.remove(function(err, result){
      if(err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted Message',
        obj: result
      })
    })
  })
});

module.exports = router;