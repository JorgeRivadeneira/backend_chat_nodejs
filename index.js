const express = require('express');

const path = require('path');
require('dotenv').config();

//DB config
const {dbConnection} = require('./database/config.js');
dbConnection();

//App de express
const app = express();

//Lectura y parseo del body
app.use(express.json());

//Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');



  //Descargarse toda la libreria de:
  //localhost:3000/socket.io/socket.io.js



//path publico
const publicPath = path.resolve(__dirname, 'public');

//Mis Rutas
//Middleware es una funcion que se ejecuta cuando pase por ahi
app.use('/api/login', require('./routes/auth'));

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if(err){
        throw new Error(err);
    }
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
})