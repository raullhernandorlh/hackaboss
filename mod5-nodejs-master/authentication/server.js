require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const { login, register } = require('./controllers/users');
const { isAuthenticated, isAdmin } = require('./middlewares/auth')
const { add, list } = require('./controllers/events');

const port = process.env.PORT;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use((req, res, next) => {
    console.log('código que se ejecuta antes de procesar el endpoint');
    next();
})

app.post('/user', register);

app.post('/user/login', login);

// solo los usuarios autenticados pueden leer los eventos creados
app.get('/event', isAuthenticated, list);

// solo los usuarios autenticados y que además sean administradores
// pueden crear eventos
app.post('/event', isAuthenticated, isAdmin, add);

app.use((error, req, res, next) => {
    res
        .status(error.status || 500)
        .send({status: 'error', message: error.message})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});