const express = require('express');
const app = express();

// Estou dizendo para o Express usar EJS como View Engine
app.set('view engine', 'ejs');

// Routes
app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;
    var produtos = [
        { 
            nome: "Doritos",  
            preco: 5.99
        },
        {
            nome: "Coca-Cola",
            preco: 3.99
        },
        {
            nome: "Leite",
            preco: 2.99
        },
        {
            nome: "Alcatra",
            preco: 30.99
        },
        {
            nome: "Red Bull",
            preco: 8.99
        },
        {
            nome: "Nescau",
            preco: 5.99
        }
    ];

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "KLMTech",
        msg: exibirMsg,
        produtos: produtos
    })
});


// Server
app.listen(8000, (erro) => {
    if(erro) {
        console.log('Ops, algo deu errado!');
    }else {
        console.log('Servidor rodando...');
    }
});