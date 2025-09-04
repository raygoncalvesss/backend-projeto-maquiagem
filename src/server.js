import express from "express";
import { config } from "dotenv";
import produtoRoutes from "./routes/produtoRoutes.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4000; // Define a porta do servidor
const app = express();

app.use(express.json()); 
app.get("/", (req, res) => res.json({ message: "API de maquiagem on!" }));
app.use("/produtos", produtoRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
