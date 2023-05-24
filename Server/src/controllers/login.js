const usuarios = require('../utils/users');

const login = (req, res) => {
	const { email, password } = req.query;

	const usuarioEncontrado = usuarios.find(
		(usuario) => usuario.email === email && usuario.password === password
	);

	if (!usuarioEncontrado) {
		return res
			.status(500)
			.json({ message: 'No email or password was registered.' });
	}
	if (usuarioEncontrado) {
		res.status(200).json({ access: true });
	} else {
		res.status(200).json({ access: false });
	}
};
//     if(password === usuarios.password &&  email === usuarios.email){
//  return   res.status(200).json({access: true})
// }
//    return  res.status(200).json({access: false})

// };
module.exports = { login };
