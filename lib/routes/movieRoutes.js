const { Router } = require('express');
const Movie = require('../models/Movie');

module.exports = Router()

  .post('/', (req, res, next) => {
    const {
      title,
      genre,
      mainActor
    } = req.body;

    Movie 
      .create({ title, genre, mainActor })
      .then(movie => res.send(movie))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Movie
      .find()
      .then(movies => res.send(movies))
      .catch(next);
  })

  .get('/:id', (req,  res, next) => {
    Movie
      .findById(req.params.id)
      .then(movie => res.send(movie))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Movie
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(movie => res.send(movie))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Movie
      .findByIdAndDelete(req.params.id)
      .then(movie => res.send(movie))
      .catch(next);
  });

  
