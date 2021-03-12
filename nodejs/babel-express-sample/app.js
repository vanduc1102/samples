import httpError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';


import errorHandler from './src/middlewares/error-handler';
import indexRouter from './src/routes/index'
import usersRouter from './src/routes/users'

import './src/config/sequelize';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(httpError(404));
});

app.use(errorHandler);

export default app;
