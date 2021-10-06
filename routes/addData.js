import express from 'express';
import Category from '../models/category.js';
import Item from '../models/item.js';

const router = express.Router();

router.post('/addcategory', async (req, res) => {
  try {
    const { name /* description */ } = req.body;
    if (!name) {
      throw new Error();
    }

    const newDbCategory = new Category({ name /* description */ });
    await newDbCategory.save();
    res.json({ message: undefined });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/additem', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newDbItem = new Item({ name, description });

    await newDbItem.save();
    // console.log('db aded');

    res.json({ message: undefined });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get('/addImage', (req, res) => {
  res.render('index');
});

router.post('/add', (req, res) => {
  res.send(JSON.stringify(req.body));
});

export default router;
