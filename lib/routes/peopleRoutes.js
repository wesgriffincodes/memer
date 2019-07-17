const { Router } = require('express');
const People = require('../models/People');

module.exports = Router()

  .post('/', (req, res, next) => {
    const {
      name,
      age,
      birthday
    } = req.body;

    People
      .create({ name, age, birthday })
      .then(person => res.send(person))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    People
      .find()
      .then(people => res.send(people))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    People
      .findById(req.body.id)
      .then(person => res.send(person))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    People
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(person => res.send(person))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    People
      .findByIdAndDelete(req.params.id)
      .then(person => res.send(person))
      .catch(next);
  });

  
