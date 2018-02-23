var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName : {type: String, required: true},
  lastName : {type: String, required: true},
  password : {type: String, required: true},
  email : {type: String, required: true, unique: true}, // Uses mongoose-unique-validator to enable unique value
  messages : [{type: Schema.Types.ObjectId, ref: 'Message'}] // Has to be an array
})

schema.plugin(mongoseUniqueValidator);

module.exports = mongoose.model('User', schema);