import express from 'express';
import Admin from '../models/admin.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('auth-change');
});

router.post('/', async (req, res) => {
  const { oldLogin, login, password } = req.body;
  
  const admin = await Admin.findOneAndUpdate({
    login: oldLogin,
  },
  {
    $set: {
      login: login,
      password: password,
    },
  });

  res.redirect('/admin');
});

export default router;
