const express = require('express');
const app = express();

// Estou dizendo para o Express usar EJS como View Engine
app.set('view engine', 'ejs');

// Routes
app.get("/", (req, res) => {
    res.render('principal/perfil');
});

// Server
app.listen(8000, (erro) => {
    if(erro) {
        console.log('Ops, algo deu errado!');
    }else {
        console.log('Servidor rodando...');
    }
});