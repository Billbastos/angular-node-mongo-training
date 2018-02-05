var express = require('express');
var router = express.Router();
// var User = require('../models/user'); // MONGOOSE

router.get('/', function (req, res, next) {
    res.render('index');
});

/* --- MONGOOSE TESTS -----

router.get('/', function (req, res, next) {

    User.findOne({}, (err, doc)=>{
        if(err) {
            return res.send('Error!');
        }
        res.render('node', {email: doc.email});
    });
    
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Gui',
        lastName: 'Bastos',
        password: 'super-secret',
        email: email
    });
    user.save((err, doc)=>{
        if(err) {
            return res.send(`Error! - ${err}`);
        }
        res.redirect('/');
    });
    
});

router.get('/message/:msg', function (req, res, next) {
    res.render('node', {message: req.params.msg});
});

router.post('/message', function (req, res, next) {
    var message = req.body.message;
    res.redirect('/message/' + message);
});

*/

module.exports = router;
