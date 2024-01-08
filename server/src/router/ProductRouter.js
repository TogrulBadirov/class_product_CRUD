import express from "express";
import { Products } from "../models/ProductModel.js";
import { createProduct, deleteProduct, getAllProducts, getProductsById, updateProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductsById);

router.post("/",createProduct);

router.put("/",updateProduct);

router.delete("/:id",deleteProduct);

export default router;
