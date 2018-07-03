var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var phoneSchema = new Schema({
  name:    { type: String },
  price:     { type: Number }
});

module.exports = mongoose.model('Phone', phoneSchema);
