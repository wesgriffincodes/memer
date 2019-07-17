const { Router } = require('express');
const Memer = require('../models/Memer');


module.exports = Router()

  .post('/', (req, res, next) => {
    const {
      top,
      image,
      bottom  
    } = req.body;

    Memer
      .create({ top, image, bottom })
      .then((meme) => res.send(meme))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Memer
      .find()
      .then((memes) => res.send(memes))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Memer  
      .findById(req.params.id)
      .then((meme) => res.send(meme))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Memer
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((meme) => res.send(meme))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Memer
      .findByIdAndDelete(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  });




 
