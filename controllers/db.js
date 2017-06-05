var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/project-ann-test");

var userSchema = new mongoose.Schema({
  name: String,
  phone: String
});
var User = mongoose.model('User', userSchema);

module.exports = function(data){
  console.log("Reached db.js SAVE function");
  var name = data.name;
  var phone = data.phone;
  var newUser = User({name: name, phone: phone}).save(function(err, data){
    if(err){
      throw err;
    }
  });
};
