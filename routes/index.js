module.exports = function (app, options) {
  app.get('/', function (req, res) {
    res.sendFile('index.html', options);
    console.log("Index page loaded...");
  });
}