const express = require('express'); //importar el modulo express
const cookieParser = require('cookie-parser'); // manejador de cookies
const bodyParser = require('body-parser');// permite procesar solicitudess HTTP entrantes en la API
const morgan = require('morgan'); // para registrar las solicitudes HTTP en la consola
const routes = require('./routes/index.js'); //permite importar todas las rutas definidas

require('./db.js'); //Importamos la configuracion de la base de datos

const server = express(); //Creamos una instancia de express llamada server
const cors = require('cors');
server.name = 'API'; // Se define el nombre del servidor, en este caso API

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
//Agrega el middleware body-parser para analizar los cuerpos de las solicitudes entrantes en formato urlencoded
server.use(bodyParser.json({ limit: '50mb' }));
//Agrega el middlewre body-parser para analizar los cuerpos de las solicitudes entrantes en formato Json
server.use(cookieParser());
//Agrega el middleware cookie-parser para analizar las cookies en las solicitudes entrantes
server.use(morgan('dev'));
//Agrega el middleware morgan para registrar las solicitudes HTTP en la consola en formato dev
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Agrega el middleware para permitir el acceso de solicitudes desde el dominio http://localhost:3000 y permitir los metodos GET, POST, OPTIONS, PUT Y DELETE.

server.use('/api', routes);
// Agrega todas las rutas definidas en la carpeta /routes con el prefijo 'api'

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

//Agrega un middleware para manejar errores en la API y devuelve un mensaje de error y el codigo de estado 500 en caso de que ocurra un error.

module.exports = server;
