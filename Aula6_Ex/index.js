import express from "express";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

/*
    GET / - Responde com "Hello World!"
    POST /api/produtos - Recebe um produto via req.body e exibe no console
    PUT/PATCH /api/produtos/:id - Atualiza um produto
    DELETE /api/produtos/:id - Deleta um produto
*/

app.use(express.static(__dirname + "/public"));

app.use(express.json());

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 100 },
    { id: 3, nome: "Teclado", preco: 200 }
];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/produtos", (req, res) => {
    res.json(produtos);
});

app.get("/api/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
});

app.post("/api/produtos", (req, res) => {
    const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco
    };

    produtos.push(novoProduto);
    res.status(201).json({ mensagem: "Produto criado", produto: novoProduto });
});

app.put("/api/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    produto.nome = req.body.nome || produto.nome;
    produto.preco = req.body.preco || produto.preco;

    res.json({ mensagem: "Produto atualizado", produto });
});

app.delete("/api/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    produtos.splice(index, 1);
    res.json({ mensagem: `Produto ${id} deletado` });
});

app.post("/api/usuarios", (req, res, next) => {
    const { isAdmin } = req.body;
    if (!isAdmin) {
        return res.status(401).json({ mensagem: "Acesso negado" });
    }
    next();
}, (req, res) => {
    const usuario = req.body;
    console.log("Usuário cadastrado:", usuario);
    res.json({ mensagem: "Usuário cadastrado", usuario });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});