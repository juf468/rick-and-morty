// aca tengo que poder mostrar el detalle de todo el personaje
// no puedo mandar id por props xq ningun componente que lo renderice

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
	const { detailId } = useParams(); // console.log( obj de los valores) =>> useParams es un hook
	//quiero el id para pedir los datos del personaje x servidor, cuando el personaje se MONTA useEffect
	const [character, setCharacter] = useState({});
	//Character.name?()<p>loading<p> si ya tengo la primer propiedad mostrar todo, sino mostrar loading.
	//ternario ? si secumple tatat sino tatata

	useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
			(Response) => setCharacter(Response.data)
		);
	}, [detailId]);

	return (
		<div>
			{character.name ? (
				<>
					<h2>{character.name}</h2>
					<p>{character.status}</p>
					<p>{character.species}</p>
					<p>{character.gender}</p>
					<p>{character.origin?.name}</p>
					<img src={character.image} alt="img" />
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};
export default Detail;
