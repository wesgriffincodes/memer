const express = require('express');
const app = express();
const cors = require('cors');

//schemas required
const memeRoutes = require('./routes/memeRoutes');
const toyRoutes = require('./routes/toyRoutes');
const movieRoutes = require('./routes/movieRoutes');
const peopleRoutes = require('./routes/peopleRoutes');

//middleware
const logger = require('./middleware/loggerMiddleware');
const notFound = require('./middleware/notFoundMiddleware');
const error = require('./middleware/errorMiddleware');

app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/memes', memeRoutes);
app.use('/api/v1/toys', toyRoutes);
app.use('/api/v1/movies', movieRoutes);
app.use('api/v1/people', peopleRoutes);

//console logs method and path on request
app.use(logger);



app.use(notFound);
app.use(error);


module.exports = app;
