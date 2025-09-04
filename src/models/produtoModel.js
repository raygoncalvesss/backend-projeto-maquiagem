import prisma from "../../prisma/prisma.js";



class ProdutoModel {
  async findAll() {
    const produtos = await prisma.produto.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    return produtos;
  }

  async findById(id) {
    const produto = await prisma.produto.findUnique({
      where: {
        id: Number(id)
      }
    });
    return produto;
  }

  async create({ nome, marca, preco, categoria, cor, estoque, imagemUrl, descricao }) {
    const produto = await prisma.produto.create({
      data: {
        nome,
        marca,
        preco,
        categoria,
        cor,
        estoque,
        imagemUrl,
        descricao
      }
    });
    return produto;
  }

  async update(id, data) {
    const produto = await prisma.produto.update({
      where: {
        id: Number(id)
      },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });
    return produto;
  }

  async delete(id) {
    await prisma.produto.delete({
      where: {
        id: Number(id)
      }
    });
    return true;
  }
}

export default ProdutoModel;