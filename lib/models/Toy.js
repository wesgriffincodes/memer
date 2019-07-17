const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: String,
  }
});

module.exports = mongoose.model('Toy', toySchema);

