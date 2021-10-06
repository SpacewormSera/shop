import mongoose from 'mongoose';
import Admin from '../models/admin.js';

mongoose.connect(`mongodb+srv://anbochkarev1991:temporarypassword12345@cluster0-glx7r.mongodb.net/DonCarapuldon?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function adminSeed() {
  const admin = new Admin({
    login: 'ksenia_gayvoronovskaya',
    password: 'temporary-admin-password',
  });
  await admin.save();
  mongoose.disconnect();
}

// adminSeed();
