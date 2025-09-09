import express from "express";

// Importar todas as rotas
import produtoRouter from "./produtoRoutes.js";

const router = express.Router();
// Rotas públicas
router.use("/produtos", produtoRouter);

export default router;
