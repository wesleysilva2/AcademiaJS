const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://ede8021:ede8021@cluster1.vt98qtn.mongodb.net/academydb?retryWrites=true&w=majority&appName=Cluster1');

app.use(cors()); // Liberando todo acesso externo a api, apenas para teste, é possivel definir um endereço de acesso especifico
app.use(express.json());
app.use(routes);

app.listen(3232); 