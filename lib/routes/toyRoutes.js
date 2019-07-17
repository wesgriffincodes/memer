const { Router } = require('express');
const Toy = require('../models/Toy');

module.exports = Router()

  .post('/', (req, res, next) => {
    const {
      name,
      brand, 
      price
    } = req.body;

    Toy 
      .create({ name, brand, price })
      .then(toy => res.send(toy))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Toy
      .find()
      .then(toys => res.send(toys))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Toy
      .findById(req.params.id)
      .then(toy => res.send(toy))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Toy
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(toy => res.send(toy))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Toy
      .findById(req.params.id)
      .them(toy => res.send(toy))
      .catch(next);
  });
  
