import express from 'express';
const router = express.Router();
import Item from '../models/item.js';

router.get('/:id', async (req, res) => {
  const items = await Item.find({ categoryId: req.params.id });
  res.render('items1', { items });
});

export default router;
