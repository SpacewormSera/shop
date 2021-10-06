import mongoose from "mongoose";
import Admin from "../models/admin.js";

mongoose.connect(`your uri`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function adminSeed() {
  const admin = new Admin({
    login: "ksenia_gayvoronovskaya",
    password: "temporary-admin-password",
  });
  await admin.save();
  mongoose.disconnect();
}

// adminSeed();
