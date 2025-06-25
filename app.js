const express = require('express');
const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');
const usuariosRouter = require('./routes/usuarios');
const loginRouter = require('./routes/login')

const app = express();

app.use(express.json());

app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {res.send(' API ~ Ativa!')});


module.exports = app;
