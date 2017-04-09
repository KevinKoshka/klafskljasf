var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');

var Schema = mongoose.Schema;
//Se crea el schema
var userSchema = new Schema({
  name     : { type: String, required: true, unique: true },
  password : { type: String, required: true}
});
//Se crea el modelo que usa al schema
var User = mongoose.model('User', userSchema);

module.exports = User;