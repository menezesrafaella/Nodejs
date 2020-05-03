const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
//Iniciando o App
const app = express();
app.use(express.json()); //permite que seja feita requisicoes em json
app.use(cors());
//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true,
useNewUrlParser: true,  useFindAndModify: false }).then(() => console.log('DB Connected!'))
.catch(err => {
console.log('Error DB');
});

requireDir('./src/models');

// const Product = mongoose.model('Product')

//Rotas
//use aceita todo tipo de requisicao
app.use('/api', require('./src/routes'))

app.listen(3001);