import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const infoSchema = new Schema({
  phone: [{
    type: String
  }],
  email: [{
    type: String
  }],
  socialLinks: [{
    type: String
  }]
});

export default model('Info', infoSchema);
