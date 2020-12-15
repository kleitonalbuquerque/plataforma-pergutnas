const express = require('express');
const app = express();

// Estou dizendo para o Express usar EJS como View Engine
app.set('view engine', 'ejs');

// Routes
// app.get("/", (req, res) => {
//     res.send('Teste');
// })
app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "KLMTech"
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