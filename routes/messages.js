var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../models/user'); // Mongoose User Obj
var Message = require('../models/message'); // Mongoose Message Obj

/* Fetch Data from Mongo through Mongoose find method */
router.get('/', function(req, res, next) {
  Message.find()
  .populate('user', 'firstName') // Populates obj `message` with user.firstName on it.
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

/* Filter for all requests to check authenticated users*/
router.use('/', function(req, res, next){
  // Verify is token is valid
  jwt.verify(req.query.token, 'secret', function(err, decoded){
    if(err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      })
    }
    next(); // Continue the request journey
  })
});

/* Add data in MongoDB through Mongoose save method */
router.post('/', function (req, res, next){
    var decoded = jwt.decode(req.query.token); // Can be used after the token is validated on the jwt.verify(req.query.token, 'secret', fn)
    User.findById(decoded.user._id, function(err, user){
      if(err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      var message = new Message({
        content: req.body.content,
        user: user._id // Adding user to the message 
      }) 
      message.save(function(err, result) {
        if(err) {
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });
        }
        user.messages.push(result); // Adding message to the users array
        user.save();
        result.user = user; // adding user into the result
        res.status(201).json({
          message: 'Saved Message',
          obj: result
        })
      });
    })
    
});

/* update just the field changed 'content' from message */
router.patch('/:id', function(req, res, next) {
  var decoded = jwt.decode(req.query.token); // Can be used after the token is validated on the jwt.verify(req.query.token, 'secret', fn)
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
    if(message.user != decoded.user._id) {
        return res.status(401).json({
          title: 'Not Authenticated',
          error: {message: 'Users do not match'}
        })
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
  var decoded = jwt.decode(req.query.token); // Can be used after the token is validated on the jwt.verify(req.query.token, 'secret', fn)
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
    if(message.user != decoded.user._id) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: {message: 'Users do not match'}
      })
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