const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api';

const getCharById = async (req, res) => {
	try {
		const { id } = req.params;

		const response = await axios.get(`${URL}/character/${id}`);
		const { status, name, species, origin, image, gender } = response.data;

		let character = { id, status, name, species, origin, image, gender };

		return character.id
			? res.json(character)
			: res.status(404).send('not found');
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = { getCharById };
