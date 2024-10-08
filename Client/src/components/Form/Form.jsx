import { useState } from 'react';
import validation from './Validation';


const Form = ({ login }) => {
	//paso la funcion loging por props
	const [userData, setUserData] = useState({
		username: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		username: '',
		password: '',
	});

	const handleInputChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setUserData({ ...userData, [property]: value });
		validation({ ...userData, [property]: value }, errors, setErrors); //ejecuto validation luego de los cambios, argumentamos la misma info que mandamos a validar
	};
	const submitHandler = (event) => {
		//recibe el evento
		event.preventDefault();
		login(userData); //ejecuto la funcion login que contiene userdata
	}; // para que no recargue la pag
	//ONSUBMITH RECIBE EL EVENTO DEL BOTON X SUBMITHANDLER
	//ONSUBMIT Y PREVENTDEFAULT SON SOLO PARA HACER FORMULARIOS!!
	return (
		<form onSubmit={submitHandler} className="flex flex-col absolute z-10 justify-center border-[4px] border-colorBorderForm bg-[#00000033] rounded-2xl px-16 py-12 gap-4">
			<div>
				<div className='flex items-end'>
					<label className="text-colorWhite font-bold mr-2" htmlFor="username">
						Username:
					</label>
					<input
						className="rounded-xl h-6 px-2 py-3.5 outline-none"
						type="text"
						name="username"
						value={userData.username}
						onChange={handleInputChange}
					/>
				</div>
				<p className='text-white'>{errors.username}</p>
			</div>
			<div>
				<div className='flex items-end'>
					<label className="text-colorWhite font-bold mr-2" htmlFor="password">
						Password:
					</label>
					<input
						className="rounded-xl h-6 px-2 py-3.5 outline-none"
						type="text"
						name="password"
						value={userData.password}
						onChange={handleInputChange}
					/>
				</div>
				<p className='text-colorWhite'>{errors.password}</p>
			</div>
			<button className="bg-colorButtonLogin rounded-2xl border-[4px] border-black py-2 text-2xl font-bold mt-6">Login</button>
		</form>
	);
};

export default Form;
//porque le agregue name a los inputs? y porque
// haciendo usestate agregue el value a los inputs
// tengo los inputs bindeados al estado=>>> explicar xd
// x ahora solo con el usestate no puedo escribir en los inputs porque son props vacias
// con el handlechange le agrego los onchenge a los inputs =>> que es un onchage del input
//  agrego un const property porque quiero modificar la propiedad =>> event.target.name =>> que es target? el event. target es el imput?
// no entiendo para que el conts value
// por ultimo en  handleinputchange seteamos el estado donde hacemo una copia de userdata ({..userdata}) donde modificamos la property ({...userdata,[property]})
//=> y le damos el valor de value ({...userdata,[property]:value}) NO ENTENDI DESDE LA PARTE DEL VALUE
//creo otro usestate para los errores de password y username, x ello dentro del obj tendra dentro dichas key-value

//validation creo un p que muestre los errors.username, como hace para no mostrarlo siempre, es por la funcion?
