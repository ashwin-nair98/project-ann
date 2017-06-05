var express = require('express');
var router  = express.Router();
var mongoose = require('mongoose');
mongoose.connect("mongodb://user:user@ds163181.mlab.com:63181/project-ann");


var userSchema = new mongoose.Schema({
  name: String,
  phone: String
});
var User = mongoose.model('User', userSchema);

router.get('/', function(req, res, next){
  res.render('pages/index');
});

router.post('/', function(req, res){
  console.log("Reached route.js POST function");
  var name = req.body.name;
  var phone = req.body.phone;
  var newUser = User({name: name, phone: phone}).save(function(err, data){
    if(err){
      throw err;
    }
    console.log("Reached save function");
  });
  res.render('pages/index');
});

module.exports = router;
