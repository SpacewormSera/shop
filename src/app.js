// Основной файл со всеми ручками и подключениями (подключения не совсем все)
import express from 'express';
import createError from 'http-errors';
import path from 'path';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';

import indexRouter from '../routes/index.js';
import items1Router from '../routes/items1.js';
import items2Router from '../routes/items2.js';
import authRouter from '../routes/auth.js';
import adminPanelRouter from '../routes/adminPanel.js';
import authChangeRouter from '../routes/auth-change.js';
import addDataRouter from '../routes/addData.js';

const FileStore = sessionFileStore(session);

dotenv.config();
const app = express();

mongoose.connect(process.env.DB_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'hbs');
app.set('views', path.resolve('views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(cookieParser());
app.use(session({
  store: new FileStore(),
  key: 'admin_sid',
  secret: 'Don Carapuldon',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000000000,
  },
}));

app.use('/', indexRouter);
app.use('/items1', items1Router);
app.use('/items2', items2Router);

app.use((req, res, next) => {
  res.locals.isAuth = !!req.session.admin;
  if (req.session.admin) res.locals.adminName = req.session.admin.login;

  // if (req.cookies.admin_sid && !req.session.admin) res.clearCookie('admin_sid');
  next();
});

app.use('/auth', authRouter);
app.use('/admin', adminPanelRouter);
app.use('/new-data', authChangeRouter);
app.use('/add', addDataRouter);

// Отлавливаем 404 ошибки
app.use((req, res, next) => next(createError(404)));

// Рендерим страницу ошибки
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

export default app;
