import { Products } from "../models/ProductModel.js";

export const getAllProducts = async (req, res) => {
  const allProducts = await Products.find({});
  res.send(allProducts);
};

export const getProductsById = async (req, res) => {
  const {id} = req.params
  console.log(id);
  const allProducts = await Products.findById(id);
  console.log(allProducts);
  res.send(allProducts);
};

export const createProduct =  async (req, res) => {
    try {
      const Product = new Products(req.body);
  
      await Product.save();
      console.log(Product);
      res.send("Product Created!");
    } catch (error) {
      console.log(error);
    }
  }

  export const updateProduct =  (req, res) => {
  res.send("Got a PUT request at /user");
}

  export const deleteProduct =  async (req, res) => {
    const {id} = req.params
    const Product = await Products.findByIdAndDelete(id)
    res.send("Product Deleted!");
  }
