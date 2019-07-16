require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const Memer = require('../lib/models/memeModel')
