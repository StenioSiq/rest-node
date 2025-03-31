const express = require('express');
const path = require('path');
const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);

app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'public', 'index.html'));});

module.exports = app;
