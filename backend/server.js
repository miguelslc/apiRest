//obtener Dependencias
const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

//pedidos parse
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use (function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Configuracon de la DB
const config = require('./config');
const mongoose = require('mongoose');
require('./product.routes')(app);

mongoose.Promise = global.Promise;

//Conectandose a la DB
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(()=>{
    console.log("Conexion a la DB Exitosa")
}).catch(()=>{
    console.log('Ups, algo fallo, saliendo..', err)
    process.exit();
})



//defaul route
app.get('/', (req, res)=>{
    res.json({"message":"Bienvenidos al Proyecto Integrador"})
});

app.listen(config.serverport, () =>{
    console.log("Servidor is listening on port: " + config.serverport);
});
