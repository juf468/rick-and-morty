const { User } = require('../DB_connection');

module.exports = async (req, res) => {
	try {
		const { email, password } = req.query;
		if (!email || !password) {
			return res.status(400).send('Faltan datos');
		}

		// Buscar al usuario
		let user = await User.findOne({ where: { email } });

		// Si el usuario no existe, crearlo
		if (!user) {
			user = await User.create({ email, password });
		}

		// Verificar la contraseña
		return user.password === password
			? res.json({ access: true })
			: res.status(403).send('Contraseña incorrecta');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};
