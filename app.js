var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
var mongoUrl = "mongodb://mongo/phones"

var connectWithRetry = function() {
  return mongoose.connect(mongoUrl, function(err) {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
      setTimeout(connectWithRetry, 5000);
    }
  });
};
connectWithRetry();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/phone')(app, mongoose);
var PhonesCtrl = require('./controllers/phones');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello API!");
});
app.use(router);

// API routes
var phones = express.Router();

phones.route('/phones')
  .get(PhonesCtrl.findAllPhones)
  .post(PhonesCtrl.addPhone);

phones.route('/phones/:id')
  .get(PhonesCtrl.findById)
  .put(PhonesCtrl.updatePhone)
  .delete(PhonesCtrl.deletePhone);

app.use('/api', phones);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
