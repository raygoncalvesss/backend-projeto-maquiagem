import express from "express";
import ProdutoController from "../controllers/produtoController.js";
import produtoController from "../controllers/produtoController.js";

const router = express.Router();

router.get("/", ProdutoController.getAll);
router.get("/:id", produtoController.getById);
router.post("/", produtoController.create);
router.put("/:id", produtoController.update);
router.delete("/:id", produtoController.delete);

export default router;
