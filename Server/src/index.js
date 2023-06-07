// Importar http desde el módulo http.

// A partir de http crea y levanta un servidor en el puerto 3001.

// Copia y pega la siguiente línea dentro del callback de tu servidor

// res.setHeader('Access-Control-Allow-Origin', '*');
// Crea un condicional que verfique si la url incluye el string "/rickandmorty/character". En el caso de que si lo haga deberás obtener el id del personaje que te llega por la url. Luego de obtener el id, búscalo dentro del archivo data.js (deberás importar el archivo). Ten en cuenta que el id de la url es un string, y los id de los personajes son números.

// [NOTA]: la url te llegará con la siguiente estructura. Ejemplo: /rickandmorty/character/:id. Piensa en una lógica que te permita obtener el id del final.

// Envía como respuesta un JSON que contenga al personaje.
//---------ELIMINE COSITAS :.(

// Crea un condicional que pregunte si la url incluye el string "/rickandmorty/character". En el caso de que si lo incluya deberás ejecutar el controlador que creamos en el ejercicio anterior pasándole como argumentos:

// El primer parámetro debe ser parámetro res.
// El segundo parámetro debe ser el id del personaje que recibes mediante la como parámetro.
// [NOTA]: dentro del parámetro req.url está el id del personaje.

// const http = require('http');
// const getCharById = require('./controllers/getCharById');

// http
// 	.createServer((req, res) => {
// 		res.setHeader('Access-Control-Allow-Origin', '*');
// 		const { url } = req;
// 		if (url.includes('/rickandmorty/character')) {
// 			const id = url.split('/').pop();

// 			getCharById(res, id);
// 		}
// 	})
// 	.listen(3001, 'localhost');

//----------------------'ELIMINADO' AHORA CON EXPRESS-------------------
// const express = require('express');
// const server = express();
// const PORT = 3001;// CON ESTA VARIEBLE GUARDO EL PURTO Y LO REUTILIZO EN EL LISTENER

// server.listen(PORT, () => {
// 	console.log('Server raised in port: ' + PORT);
// });
//------OTRA FORMA CON MEJORES PRACTICAS (EXPRESS)-----

const express = require('express');
const server = express();
const PORT = 3001;
const { conn } = require('./DB_connection');
const router = require('./routes/index');

server.use(express.json());
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
server.use('/rickandmorty', router); //este es mejor aca abajo para que todo el midlewore le de permiso al front para acceder a las rutas

conn.sync({ force: true }).then(() => {
	server.listen(PORT, () => {
		console.info(`listening on port ${PORT}`);
	});
});
