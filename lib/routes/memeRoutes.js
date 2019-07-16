const { Router } = require('express');
const Memer = require('../models/memeModel');


module.exports = Router()

  .post('/api/v1/memes', (req, res, next) => {
    const {
      topText,
      bottomText,
      photo
    } = req.body;

    Memer
      .create({ topText, bottomText, photo })
      .then((meme) => res.send(meme))
      .catch(next);
  })

  .get('/api/v1/memes', (req, res, next) => {
    Memer
      .find()
      .then((memes) => res.send(memes))
      .catch(next);
  })

  .get('/api/v1/memes/:id', (req, res, next) => {
    Memer  
      .findById(req.params.id)
      .then((meme) => res.send(meme))
      .catch(next);
  })

  .put('/api/v1/memes/:id', (req, res, next) => {
    Memer
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((meme) => res.send(meme))
      .catch(next);
  })

  .delete('/api/v1/memes/:id', (req, res, next) => {
    Memer
      .findByIdAndDelete(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  });



 
