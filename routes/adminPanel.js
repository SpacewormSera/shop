import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.admin) {
    return res.render('adminPanel');
  }
  return res.redirect('/auth');
});

router.get('/addItem', (req, res) => {
  res.render('addItem');
});

router.get('/addImage', (req, res) => {
  res.render('index');
});
router.post('/add', (req, res) => {
  res.send(JSON.stringify(req.body));
});

router.get('/logout', async (req, res, next) => {
  if (req.session.admin) {
    try {
      req.session.destroy();
      res.clearCookie('admin_sid');
      res.locals.adminName = '';
      res.redirect('/auth');
    } catch (err) {
      next(err);
    }
  } else {
    res.redirect('/auth');
  }
});

export default router;
