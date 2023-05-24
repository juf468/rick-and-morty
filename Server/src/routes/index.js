// Dirígete a la carpeta routes y crea un archivo con el nombre index.js. Dentro de este deberás importar todos tus controladores.
//También deberás importar las función Router de express. Crea una ruta para cada controlador con los siguientes paths:

// GET getCharById: "/character/:id"
// GET login: "/login"
// POST postFav: "/fav"
// DELETE deleteFav: "/fav/:id"
// Finalmente exporta tu router.
const { login } = require('../controllers/login');
const { getCharById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const router = require('express').Router();

//creo estrucutra con express
router.get('/character/:id', (req, res) => {
	getCharById(req, res); //lo llamo y le paso la info para que la maneje
});

router.get('/login', (req, res) => {
	login(req, res);
});

router.post('/fav', (req, res) => {
	postFav(req, res);
});

router.delete('/fav/:id', (req, res) => {
	deleteFav(req, res);
});
module.exports = router;
