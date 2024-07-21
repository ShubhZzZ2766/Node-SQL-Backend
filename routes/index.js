import express from 'express'
import { Router } from "express";
import { createProduct, deleteProducts, getAllProducts, getProduct, updateProduct } from '../handlers/index.js'
const appRouter = express.Router();

appRouter.get("/", getAllProducts);
appRouter.get("/:id", getProduct);
appRouter.post("/create", createProduct);
appRouter.put("/update/:id", updateProduct);
appRouter.delete("/delete/:id", deleteProducts);

export default appRouter;