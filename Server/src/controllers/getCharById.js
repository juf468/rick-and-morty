// Crea y exporta una función llamada getCharById. Esta recibirá dos parámetros: res y id.

// Dentro de esta función deberás realizar una petición a la API https://rickandmortyapi.com/api/character/:id de Rick & Morty. Utiliza promesas y no olvides que el id que utilices debe ser el que recibes por parámetro.

// [NOTA]: tendrás que importar axios.

// Una vez que tienes la respuesta de tu petición crea un objeto en el que guardes las siguientes propiedades del personaje: id (lo recibes por parámetro), name, gender, species, origin, image y status.
// [NOTA]: revisa cómo es la estructura de la respuesta que recibes de la API para poder acceder correctamente a los datos.

// Una vez creado el objeto, devuelve una respuesta en formato JSON y status igual a 200 con el personaje que obtuviste.

// Concatena un .catch al final de la promesa para poder manejar el error. Dentro de él deberás devolver una respuesta con status 500, un Content-Type igual a text/plain, y finalmente responder con la propiedad message del error.

// const axios = require('axios');

// const successH = (response, res) => {
// 	const { id, name, gender, species, origin, image, status } = response.data;
// 	res.writeHead(200, { 'Content-Type': 'application/json' });
// 	res.end(JSON.stringify({ id, name, gender, species, origin, image, status }));
// };

// const errorH = (error, res) => {
// 	res.writeHead(500, { 'Content-Type': 'text/plain' });
// 	res.end(error.message);
// };

// const getCharById = (res, id) => {
// 	axios
// 		.get(`https://rickandmortyapi.com/api/character/${id}`)
// 		.then((response) => successH(response, res))
// 		.catch((error) => errorH(error, res));
// };

// module.exports = getCharById;
//------------------------------'ELIMINE ESTO, AHORA CON EXPRESS------------------------
// Crea una constante llamada URL y guarda lo siguiente: "https://rickandmortyapi.com/api/character/".

// Crea una función con el nombre getCharById y expórtala. Recibe por parámetro a los objetos req y res.

// Dentro de la función haz una petición a la API a partir del id que recibes por Params.

// [NOTA]: no olvides importar axios.

// En el caso de que todo salga OK y se encuentre a un personaje, devuelve un JSON con las propiedades: id, status, name, species, origin, image y gender.

// En el caso de que todo salga OK pero no se encuentre a un personaje, devuelve un mensaje con status 404 que diga Not fount.

// Si hay un error debes responder con un status 500, y un texto con la propiedad message de error.

const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api';

// const getCharById = (req, res) => {
// 	const { id } = req.params;

// 	axios
// 		.get(`${URL}/character/${id}`)

// 		.then((response) => {
// 			//aramando el caso de exito
// 			const { id, status, name, species, origin, image, gender } =
// 				response.data;
// 			res
// 				.status(200)
// 				.json({ id, status, name, species, origin, image, gender });
// 		})
// 		.catch((error) => {
// 			res.status(500).json({ error: error.message });
// 		});
// };

// -----------------------AHORA CON ASYNC AWAIT ---------------------------------
const getCharById = async (req, res) => {
	try {
		const { id } = req.params;

		const response = await axios.get(`${URL}/character/${id}`);
		const { status, name, species, origin, image, gender } = response.data;

		let character = { id, status, name, species, origin, image, gender };

		return character.id
			? res.json(character)
			: res.status(404).send('not found'); // error de no encontrar personaje
	} catch (error) {
		res.status(500).send(error.message); //error del cliente si escribe mal url
	}
};

module.exports = { getCharById };
