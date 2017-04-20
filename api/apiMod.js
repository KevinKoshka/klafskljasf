module.exports = (app) => {
  const DbSchemas = require('../dbSchemas')();

  app.get('/api/logIn', (req, res) => {
    DbSchemas.User.find({ name : 'kevinkoshka' }, function(err, user){
      if (err) throw 'Username not found';
      console.log(user);
      res.status(200).send(user);
    })
  });
  
}