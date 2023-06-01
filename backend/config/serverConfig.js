require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionConfig = require('./sessionConfig');
const renderComponent = require('../middleware/renderComponent');
const { getUser } = require('../middleware/getUser');
const fileUpload = require('express-fileupload');
const fileuploadMiddeleware = require('../middleware/storage');

const config = (app) => {
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(getUser);
  app.use(renderComponent);
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(fileUpload());
};

module.exports = config;
