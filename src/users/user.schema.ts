import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  // first_name: String,
  // last_name: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // phone: String,
  // address: String,
  // created_at: { type: Date, default: Date.now }
})
