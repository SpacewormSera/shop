import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  categoryId: {
    type: mongoose.ObjectId,
    ref: 'Category',
  },
});

export default model('Item', itemSchema);
