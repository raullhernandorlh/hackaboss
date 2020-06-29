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

const miMiddleware = (req, res, next) => {
    console.log('código que se ejecuta antes de procesar el endpoint');
    next();
}

const miMiddlewareWrapper = (req, res, next) => {
    return miMiddleware;
}

/**
 * Las siguientes dos líneas hacen lo mismo
 *    - en la primera le indicamos cuál es la función de middleware
 *    - en la segunda, cuando NodeJS llega a este línea, 
 */
app.use(miMiddleware);          

app.use(miMiddlewareWrapper());  
 
   // 1er paso: NodeJS lee el fichero al inicio. En este momento se ejecuta miMidddlewareWrapper
   // 2º paso: cuando llaman a cualquier endpoint, ExpressJS llama a miMiddleware, porque
   // fue lo que devolvió miMiddlewareWrapper

app.post('/user', register);

app.post('/user/login', login);

// solo los usuarios autenticados pueden leer los eventos creados
app.get('/event', isAuthenticated, list);

// solo los usuarios autenticados y que además sean administradores
// pueden crear eventos
app.post('/event', isAuthenticated,/* isAdmin,*/ add);

app.use((error, req, res, next) => {

    res
        .status(error.status || 500)
        .send({status: 'error', message: error.message})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});