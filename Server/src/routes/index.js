// Dirígete a la carpeta routes y crea un archivo con el nombre index.js. Dentro de este deberás importar todos tus controladores.
//También deberás importar las función Router de express. Crea una ruta para cada controlador con los siguientes paths:

// GET getCharById: "/character/:id"
// GET login: "/login"
// POST postFav: "/fav"
// DELETE deleteFav: "/fav/:id"
// Finalmente exporta tu router.

const { getCharById } = require('../controllers/getCharById');
const router = require('express').Router();
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

router.get('/login', login);
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
router.get('/character/:id', getCharById);

module.exports = router;
