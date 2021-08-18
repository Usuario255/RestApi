const express = require('express');
const router = express.Router();

//retorna todos os produtos
router.get('/',(req, res, next) =>{
    res.status(200).send({
        menssegem: "Buscando um produto"
    })
})
//INSERE UM PRODUTO
router.post('/',(req, res, next) =>{
    res.status(201).send({
        menssegem: "Produto enviado"
    })
})
//PEGA UM PRODUTO ESPECIFICO
router.get('/:id_produto',(req, res, next) =>{
    const id = req.params.id_produto
    if (id ==="especial") {
        res.status(200).send({
            menssegem:"Detalhes do produto especial",
            id:id
        })
    }else{
        res.status(200).send({
        menssegem:"Detalhes do produto",
        id:id
    })
    }   
})
//ALTERA UM PRODUTO
router.patch('/',(req, res, next) =>{
    res.status(200).send({
        menssegem:"Atualizar um produto"
    })
})
//DELETA UM PRODUTO
router.delete('/', (req, res, next) =>{
    res.status(200).send({
        menssegem: "Produto excluido"
    })
})

module.exports = router;