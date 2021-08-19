const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/',(req, res, next) =>{
    res.status(200).send({
        menssegem: "Retorna os pedidos"
    })
})
//INSERE UM PEDIDO
router.post('/',(req, res, next) =>{
    res.status(201).send({
        menssegem: "Pedido enviado"
    })
})
//PEGA UM PEDIDO ESPECIFICO
router.get('/:id_produto',(req, res, next) =>{
    const id = req.params.id_produto
        res.status(200).send({
            menssegem:"Pedido Especifico",
            id:id
        })      
})

//DELETA UM PEDIDO
router.delete('/', (req, res, next) =>{
    res.status(200).send({
        menssegem: "Deletar o pedidos"
    })
})

module.exports = router;