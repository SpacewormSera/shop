import express from 'express';
import Category from '../models/category.js';
import Item from '../models/item.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await Category.find().limit(2);
  const items = await Item.find().limit(4);

  res.render('main', { categories, items });
});

export default router;
