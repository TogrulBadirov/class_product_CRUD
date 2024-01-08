import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  title: String,
  describtion: String,
  image: String,
  price: Number,
});

export const Products = mongoose.model("Products", ProductsSchema);