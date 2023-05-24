// Crea una función llamada postFav que reciba por parámetro los objetos req y res.

// Agrega en tu arreglo de favoritos el personaje que estarás recibiendo por Body.

// Finalmente devuelve tu arreglo de favoritos en formato JSON.

// Crea una función llamada deleteFav que reciba por parámetro los objetos req y res.

// Filtra a tus personajes favoritos de manera que elimines aquel que tiene el mismo id que recibes por Params.

// Finalmente devuelve tu arreglo de favoritos en formato JSON.

// Exporta ambas funciones.

let myFavorites = []; //este me sirve como copia de seguridad ya que nunca se modifica

const postFav = (req, res) => {
	const character = req.body;

	myFavorites.push(character);

	return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
	const { id } = req.params; // desestructure

	myFavorites = myFavorites.filter((fav) => fav.id !== +id);
	return res.status(200).json(myFavorites); //En el código que has proporcionado, el operador + se utiliza para convertir el parámetro id en un número.
	//pise el array original con el filtrado
};
module.exports = {
	postFav,
	deleteFav,
};
