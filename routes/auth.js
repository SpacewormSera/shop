import express from 'express';
import Admin from '../models/admin.js';


const router = express.Router();

router.get('/', (req, res) => {
  res.render('auth');
});

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  const admin = await Admin.findOne();
  if (admin.login === login && admin.password === password) {
    req.session.admin = admin;
    
    return res.redirect('/new-data');
  }
  return res.render('404');
});


export default router;
