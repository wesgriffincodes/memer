const express = require('express');
const app = express();
const cors = require('cors');
const memeRoutes = require('./routes/memeRoutes');

//middleware
const logger = require('./middleware/loggerMiddleware');
const notFound = require('./middleware/notFoundMiddleware');
const error = require('./middleware/errorMiddleware');

app.use(cors());
app.use(express.json());

app.use('/api/v1/memes', memeRoutes);
app.use(logger);



app.use(notFound);
app.use(error);


module.exports = app;
