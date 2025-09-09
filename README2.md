# Backend de Produtos de Maquiagem - Guia Passo a Passo

Este guia irá te ajudar a configurar e executar o backend para gerenciamento de produtos de maquiagem do zero.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Git
- VS Code (recomendado)

## Passo 1: Clonando o Projeto

1. Abra o terminal e clone o repositório:
```bash
git clone https://github.com/raygoncalvesss/backend-projeto-maquiagem.git
```

2. Entre na pasta do projeto:
```bash
cd backend-projeto-maquiagem
```

## Passo 2: Instalação de Dependências

1. Instale todas as dependências do projeto:
```bash
npm install
```

Este comando instalará:
- Express (framework web)
- Prisma (ORM para banco de dados)
- Outras dependências necessárias

## Passo 3: Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto:
```
DATABASE_URL="file:./dev.db"
PORT=4000
```

2. Verifique se o arquivo `package.json` tem o script de desenvolvimento:
```json
{
  "scripts": {
    "dev": "nodemon src/server.js"
  }
}
```

## Passo 4: Configuração do Banco de Dados

1. Execute a migração do banco de dados:
```bash
npx prisma migrate dev --name init
```

2. Popule o banco com dados iniciais:
```bash
node prisma/seed/seed.js
```

3. (Opcional) Verifique se o banco foi criado:
```bash
npx prisma studio
```

## Passo 5: Estrutura do Projeto

Verifique se os arquivos principais estão presentes:

1. Modelo de Produtos (`src/models/produtoModel.js`):
- Responsável pela interação com o banco de dados
- Define operações CRUD para produtos

2. Controlador de Produtos (`src/controllers/produtoController.js`):
- Gerencia a lógica de negócios
- Processa requisições e respostas

3. Rotas de Produtos (`src/routes/produtoRoutes.js`):
- Define endpoints da API
- Conecta URLs aos controladores

## Passo 6: Iniciando o Servidor

1. Inicie o servidor em modo desenvolvimento:
```bash
npm run dev
```

2. O servidor estará rodando em `http://localhost:4000`

## Passo 7: Testando as Rotas

Use um cliente HTTP (Postman, Insomnia ou Thunder Client) para testar:

1. Listar Produtos
```http
GET http://localhost:4000/produtos
```

2. Criar Produto
```http
POST http://localhost:4000/produtos
Content-Type: application/json

{
  "nome": "Batom Vermelho",
  "descricao": "Batom matte de longa duração",
  "preco": 29.90,
  "marca": "Beauty Plus",
  "categoria": "Lábios"
}
```

3. Buscar Produto por ID
```http
GET http://localhost:4000/produtos/1
```

4. Atualizar Produto
```http
PUT http://localhost:4000/produtos/1
Content-Type: application/json

{
  "preco": 34.90
}
```

5. Deletar Produto
```http
DELETE http://localhost:4000/produtos/1
```

## Passo 8: Gerenciando o Banco de Dados

1. Para visualizar os dados:
```bash
npx prisma studio
```

2. Se precisar resetar o banco:
```bash
npx prisma migrate reset
```

3. Após modificar o schema:
```bash
npx prisma migrate dev
```

## Códigos de Status HTTP

A API retorna os seguintes status:
- 200: Operação bem-sucedida
- 201: Recurso criado
- 204: Operação concluída (sem conteúdo)
- 400: Erro de validação
- 404: Recurso não encontrado
- 500: Erro interno do servidor

## Solução de Problemas

1. **Erro ao iniciar o servidor**
   - Verifique se a porta 3000 está livre
   - Confirme se o arquivo `.env` está configurado

2. **Erro nas migrações**
   - Delete a pasta `prisma/migrations`
   - Execute `npx prisma migrate reset`
   - Execute `npx prisma migrate dev`

3. **Erro ao criar produto**
   - Verifique se todos os campos obrigatórios estão preenchidos
   - Confirme se os tipos dos dados estão corretos

4. **Banco de dados não atualiza**
   - Execute `npx prisma generate`
   - Reinicie o servidor
