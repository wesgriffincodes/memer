require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const Memer = require('../lib/models/Memer');
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');


describe('app routes', () => {
  beforeAll(() => {
    connect();
  });
    
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
    
  afterAll(() => {
    return mongoose.connection.close();
  });

  it('create a new meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({ topText: 'boom', bottomText: 'no', photo: 'bing.com' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          topText: 'boom',
          bottomText: 'no',
          photo: 'bing.com',
          __v: 0
        });
      });
  });

  it('gets all memes', async() => {
    const meme = await Memer.create({  photo: 'boom.com' });

    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        const memeJSON = JSON.parse(JSON.stringify(meme));
        expect(res.body).toEqual([memeJSON]);
      });
  });

  it('gets a meme by id', async() => {
    const meme = await Memer.create({ photo: 'nope' });

    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          photo: 'nope',
          __v: 0
        });
      });
  });
    
  it('update a meme', async() => {
    const meme = await Memer.create({ photo: 'boom' });

    return request(app)
      .put(`/api/v1/memes/${meme._id}`)
      .send({ topText: 'boom' })
      .then(res => {
        expect(res.body.topText).toEqual('boom');
      });
  });

  it('deletes a meme', async() => {
    const meme = await Memer.create({ photo: 'boom' });

    return request(app)
      .delete(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body.photo).toEqual('boom');
      });
  });

});
