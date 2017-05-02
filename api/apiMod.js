module.exports = (app, jwt, apiRouter) => {
  //Se importan los schemas para poder hacer los pedidos a la base de datos.
  const DbSchemas = require('../dbSchemas')();

  app.post('/api/auth', (req, res) => {
    DbSchemas.User.find({ name : req.body.username, password : req.body.password }, function(err, user){
      if (err) throw 'Username not found';
      res.status(200).send(user);
    })
  });
  
}