//pasar funcion por props  unsearch del app <SearchBar onSearch={(characterID) => window.alert(characterID)} />
// componente que busca y agrega proximamente
//para ejecutar esta funcion DEBO ENVIARLE UN ARGUMENTO y que no dispare cada vez que se ejecutra
//utilizar => para pasar la funcion que ejecuta la otra funcion onsearch que ejecute la function onsearch pasandole como arg el id
//=>> NO ES CB unclick EJECUTA onsearch

//no tiene estado y tiene props : funcion onsearch
import { useState } from 'react';
import style from './searchBar.module.css';

export default function SearchBar({ onSearch }) {
	const [id, setId] = useState('');

	const handleChange = (event) => {
		setId(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			onSearch(id);
		}
	};

	return (
		<div className={style.searchbarContainer}>
			<input
				className={style.input}
				type="search"
				placeholder="Donde esta el sr. pantalones de 💩?"
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<button className={style.searchButton} onClick={() => onSearch(id)}>
				➕
			</button>
		</div>
	);
}
