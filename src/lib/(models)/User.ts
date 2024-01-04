import mongoose, { Schema, Document } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export interface IUser extends Document {
  _id?: string;
  username: string;
  password: string;
  email: string;
  createdAt?: string;
  isAdmin?:string;
}

const User = mongoose.models.User<IUser> || mongoose.model('User', userSchema);
export default User;
