import express from "express";
import { config } from "dotenv";
import cors from 'cors';
import produtoRoutes from "./routes/produtoRoutes.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4000; // Define a porta do servidor
const app = express();

// Middleware para logging de requisições
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    next();
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para verificar o corpo da requisição
app.use((req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {
        if (req.headers['content-type'] !== 'application/json') {
            return res.status(400).json({ 
                error: "Content-Type deve ser application/json",
                received: req.headers['content-type']
            });
        }
        console.log('Body:', req.body);
    }
    next();
});

app.get("/", (req, res) => res.json({ message: "API de maquiagem on!" }));
app.use("/produtos", produtoRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
