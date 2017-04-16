// Person schema and model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
  firstName: String,
  lastName: { type: String, required: true },
  hometown: String,
  movie: String
});

var Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
