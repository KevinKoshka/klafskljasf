module.exports = (app) => {
  //Se importan los schemas para poder hacer los pedidos a la base de datos.
  const DbSchemas = require('../dbSchemas')();

  app.get('/api/logIn', (req, res) => {
    DbSchemas.User.find({ name : 'kevinkoshka' }, function(err, user){
      if (err) throw 'Username not found';
      res.status(200).send(user);
    })
  });
  
}