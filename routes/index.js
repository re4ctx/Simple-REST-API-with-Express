import express from "express";
import { getProducts, saveProduct, updateProduct, getProductsById, deleteProduct } from "../controllers/productController.js";
import { getSuppliers, saveSupplier } from "../controllers/supplierController.js";
const router = express.Router();

// Products
router.get('/', getProducts);
router.get('/:id', getProductsById);
router.get('/supplier/getsuppliers', getSuppliers);
router.post('/supplier', saveSupplier);
router.post('/', saveProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

// Supplier


export default router;

