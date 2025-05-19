const express = require('express');
const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');

const app = express();

app.use(express.json());

app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);

app.get('/', (req, res) => {res.send(' API ~ Ativa!')});


module.exports = app;
