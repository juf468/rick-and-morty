//pasar funcion por props  unsearch del app <SearchBar onSearch={(characterID) => window.alert(characterID)} />
// componente que busca y agrega proximamente
//para ejecutar esta funcion DEBO ENVIARLE UN ARGUMENTO y que no dispare cada vez que se ejecutra
//utilizar => para pasar la funcion que ejecuta la otra funcion onsearch que ejecute la function onsearch pasandole como arg el id
//=>> NO ES CB unclick EJECUTA onsearch

//no tiene estado y tiene props : funcion onsearch
import { useState } from 'react';


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
		<div className='w-1/3 flex p-6 items-center relative justify-end'>
			<input
				className=' w-full h-10 rounded-lg border-solid border-4 border-white bg-transparent text-lg py-2 px-4 font-bold placeholder:text-white focus:outline-none text-white'
				type="search"
				placeholder="Donde esta el sr. pantalones de 💩?"
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
<button className='z-[100] absolute right-4 bg-customDarkBlue border-4 border-white rounded-full w-14 h-14 p-2 focus:outline-none text-20 cursor-pointer transition-transform ease-in-out hover:scale-110 duration-200' onClick={() => onSearch(id)}>
    ➕
</button>

		</div>
	);
}
