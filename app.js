const express = require("express");
const app = express();
const morgan = require("morgan")

const routerProdutos = require('./routes/produtos');
const routerPedidos = require('./routes/pedidos');

app.use(morgan('dev'))

app.use("/produtos",routerProdutos);
app.use("/pedidos",routerPedidos);

//Esse é um tratamento praa quando a API não encontrar uma rota
app.use((req, res, next) =>{
    const erro = new Error("Não encontrado");
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500)
    return res.send({
        erro: error.message
    })
})

module.exports = app;
