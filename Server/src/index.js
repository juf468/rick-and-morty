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

conn.sync({ force: false }).then(() => {
	server.listen(PORT, () => {
		console.info(`listening on port ${PORT}`);
	});
});
