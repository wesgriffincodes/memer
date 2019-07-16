const { Router } = require('express');
const Memer = require('../models/memeModel');


module.exports = Router()

  .get('/api/v1/memes', (req, res, next) => {
    Memer
      .find()
      .then((memes) => res.send(memes))
      .catch(next);
  })

  .get('/api/v1/memes/:id', (req, res, next) => {
    Memer  
      .findById(req.params.id)
      .then((habit) => res.send(habit))
      .catch(next);
  })

 
