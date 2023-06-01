require('@babel/register');
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const serverConfig = require('./config/serverConfig');
const sessionConfig = require('./config/sessionConfig');

const app = express();

const PORT = process.env.PORT || 4000;

serverConfig(app);
app.use(session(sessionConfig));

const indexRouter = require('./routes/index.route');

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is working with ${PORT} port`);
});
