const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  topText: String,
  bottomText: String,
  photo: {
    type: String,
    required: true
  }
});

const Memer = mongoose.model('Meme', memeSchema);

module.exports = Memer;

