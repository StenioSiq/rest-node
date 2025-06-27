require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const injetarUsuario = require('./middlewares/injetarUsuario');
const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');
const usuariosRouter = require('./routes/usuarios');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const produtosWebRouter = require('./routes/produtosWeb');
const clientesWebRouter = require('./routes/clientesWeb');
const usuariosWebRouter = require('./routes/usuariosWeb');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'views', 'public'))); 
app.set('views', path.join(__dirname, 'views'));

app.use(injetarUsuario);
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter); 
app.use('/usuarios', usuariosRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/produtos-web', produtosWebRouter);
app.use('/clientes-web', clientesWebRouter);
app.use('/usuarios-web', usuariosWebRouter);

app.get('/', (req, res) => {
  res.send('API ~ Ativa!');
});

app.get('/index', (req, res) => {
  res.render('index', {
    title: 'Início',
    usuario: req.usuario?.usuario || null
  });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login', error: null });
});


module.exports = app;
