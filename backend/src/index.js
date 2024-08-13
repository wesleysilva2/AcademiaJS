const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('chave');

app.use(cors()); // Liberando todo acesso externo a api, apenas para teste, é possivel definir um endereço de acesso especifico
app.use(express.json());
app.use(routes);

app.listen(3232); 