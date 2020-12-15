const express = require('express');
const app = express();

// Estou dizendo para o Express usar EJS como View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

// Server
app.listen(8000, (erro) => {
    if(erro) {
        console.log('Ops, algo deu errado!');
    }else {
        console.log('Servidor rodando...');
    }
});