import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export interface IBlog extends Document {
  _id?: string;
  image: string;
  title: string;
  text: string;
  tag:string;
  createdAt?: string;
}

const Blog = mongoose.models.Blog<IBlog>|| mongoose.model('Blog', blogSchema);
export default Blog;
