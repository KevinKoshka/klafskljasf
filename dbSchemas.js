module.exports = function() {
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://127.0.0.1:27017/mk_db');

  var Schema = mongoose.Schema;
  //Se crea el schema
  var userSchema = new Schema({
    name     : { type: String, required: true, unique: true },
    password : { type: String, required: true}
  });
  //Se crea el modelo que usa al schema
  var User = mongoose.model('User', userSchema);

  //Las operaciones posibles son las CRUD:

  //var chris = new User({
  //  name: 'Chris',
  //  password: 'password' 
  //});
  //chris.save(function(err){...});
  //User.find({}, function(err, users){...}); ---------> Encuentra todos.
  //User.find({name : 'user'}, function(err){...}); ---> Encuentra al del primer parámetro.
  //User.findById(1, function(err, user){...}); -------> Encuentra mediante Id único.

  //También se puede buscar mediante una sintaxis de query: http://docs.mongodb.org/manual/reference/operator/query/
  //Para encontrar y actualizar se puede hacer un .find, y luego .save anidado. O también:

  //User.findOneAndUpdate({name : 'olduser'}, {name : 'newUser'}, function(err){...}); ----> Reemplaza el valor del primer parámetro por el del segundo.
  //User.findByIdAndUpdate(4, {name : 'newUser'}, function(err){...}); --------------------> Encuentra el usuario por el id, y actualiza.

  //user.remove(function(err){...}); ----> Va anidado en un .find y elimina al user en cuestión.
  //También está el .findOneAndRemove y .findByIdAndRemove


  return {
    User : User   
  }
}