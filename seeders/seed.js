import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Category from '../models/category.js';
import Item from '../models/item.js';

dotenv.config();

mongoose.connect('mongodb+srv://anbochkarev1991:OrrMO1Ib5DnP2SYP@cluster0-glx7r.mongodb.net/DonCarapuldon?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// (async () => {
//   await new Category({ name: 'Мебель' }).save();
//   await new Category({ name: 'Предметы интерьера' }).save();
//   mongoose.disconnect();
// })();

async function itemSeed() {
  const categories = await Category.find();
  await new Item({ name: 'Стул', description: 'Супер-стул', price: 999, categoryId: categories[0]._id }).save();
  await new Item({ name: 'Стол', description: 'Круглый, вертящийся', price: 888, categoryId: categories[0]._id }).save();
  await new Item({ name: 'Диван', description: 'Полет души', price: 777, categoryId: categories[0]._id }).save();
  await new Item({ name: 'Шкаф', description: 'Все включено', price: 666, categoryId: categories[0]._id }).save();
  await new Item({ name: 'Кресло', description: 'Супер-мягкое состояние души', price: 555, categoryId: categories[0]._id }).save();
  await new Item({ name: 'Люстра', description: 'Супер-тусклая', price: 444, categoryId: categories[1]._id }).save();
  await new Item({ name: 'Портьеры', description: 'Супер-пыльные', price: 333, categoryId: categories[1]._id }).save();
  await new Item({ name: 'Подсвечник', description: 'Супер-коптильный', price: 222, categoryId: categories[1]._id }).save();
  await new Item({ name: 'Картина', description: 'Супер-дорогая', price: 111, categoryId: categories[1]._id }).save();
  await new Item({ name: 'Хрустальная пепельница', description: 'Супер-хрупкая', price: 99, categoryId: categories[1]._id }).save();
  mongoose.disconnect();
}

// itemSeed();
