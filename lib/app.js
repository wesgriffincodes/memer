const express = require('express');
const app = express();
const cors = require('cors');
const memeRoutes = require('./routes/memeRoutes');

//middleware
const logger = require('./middleware/loggerMiddleware');
const notFound = require('./middleware/notFoundMiddleware');
const error = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(cors());

app.use(logger);
app.use(memeRoutes);

app.get('/', (req, res) => {
  res.send('MEMER APP');
});


app.use(notFound);
app.use(error);


module.exports = app;
