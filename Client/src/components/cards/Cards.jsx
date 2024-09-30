//reutilizamos el componente card
//const { characters } = props =>> esta es una opcion yo desestructure arriba
// characters es un array de objetos
// dentro del div abri codigo js '{}' para poder mapear el array al cual le paso las props
//=>> desestructuradas
//para que por cada personajje me devuelva una card
// transpaso las props a cada card y al onclose le transpaso la funcion desde app.js
//const onClose = () => window.alert('Emulamos que se cierra la card');
// =>> se puede hacer para no redefinir la funcion completa dentro de card
// el return del map es el mas traicionero siempre ponerlo antes  de comenzar con la transformacion de

import Card from '../card/Card';


//=>> el array
export default function Cards({ characters,onClose}) {
	// const onClose = () => window.alert('Emulamos que se cierra la card');
	return (
		<div className=' flex justify-evenly flex-wrap bg-transparent w-full absolute top-40' >
			{characters.map(
				({ id, name, species, gender, origin, status, image,className }) => {
					return (
						<Card
							id={id}
							key={id}
							name={name}
							species={species}
							gender={gender}
							origin={origin.name}
							status={status}
							image={image}
							onClose={onClose}
							className={className}
						/>
					);
				}
			)}
		</div>
	);
}
