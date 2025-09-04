import ProdutoModel from "../models/produtoModel.js";

class ProdutoController {
  async getAll(req, res) {
    try {
      const produtoModel = new ProdutoModel();
      const itens = await produtoModel.findAll();
      res.json(itens);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  }
  async getById(req, res) {
    try {
      const { id } = req.params;
      const produtoModel = new ProdutoModel();
      const item = await produtoModel.findById(id);
      if (!item) return res.status(404).json({ error: "Produto não encontrado" });
      res.json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar produto" });
    }
  }
  async create(req, res) {
    try {
      const { nome, marca, preco, categoria, cor, estoque, imageUrl, descricao } = req.body;
      if (!nome || !marca || preco == null) {
        return res.status(400).json({ error: "nome, marca e preco são obrigatórios" });
      }
      const produtoModel = new ProdutoModel();
      const novo = await produtoModel.create({ nome, marca, preco, categoria, cor, estoque, imageUrl, descricao });
      res.status(201).json(novo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar produto" });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const produtoModel = new ProdutoModel();
      const atualizado = await produtoModel.update(id, req.body);
      if (!atualizado) return res.status(404).json({ error: "Produto não encontrado" });
      res.json(atualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar produto" });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const produtoModel = new ProdutoModel();
      const resultado = await produtoModel.delete(id);
      if (!resultado) return res.status(404).json({ error: "Produto não encontrado" });
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao deletar produto" });
    }
}
}

export default new ProdutoController();
