import './App.css';
import About from './components/About/About';
import Cards from './components/cards/Cards';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios'; // es una libreria x eso no {}
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Error from './components/Error 404/Error';
import Favorites from './components/ Favorites/ Favorites';

function App() {
	const [characters, setCharacters] = useState([]);
	const { pathname } = useLocation();
	const [access, setAccess] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (!access) {
			navigate('/');
		}
	}, [access, navigate]);

	const onSearch = async (id) => {
		try {
			const { data } = await axios(
				`http://localhost:3001/rickandmorty/character/${id}`
			);
			if (data.name) {
				const characterRep = characters.find((char) => char.id === data.id);
				if (characterRep) {
					return alert('Personaje repetido');
				}
				setCharacters((oldChars) => [...oldChars, data]);
			}
		} catch (error) {
			alert('¡No hay personajes con este ID!');
		}
	};

	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== id));
	};

	const login = async (userData) => {
		try {
			const { username, password } = userData;
			const URL = 'http://localhost:3001/rickandmorty/login/';
			const { data } = await axios(
				URL + `?email=${username}&password=${password}`
			);
			const { access } = data;
			setAccess(data);
			access && navigate('/home');
		} catch (error) {
			console.log("Error en la solicitud: ",error.message);
		}
	};

	const handleLogout = () => {
		setAccess(false);
		setCharacters([]);
	};

	return (
		<div className="App">
			<div className="flex flex-col h-full w-full items-center justify-center overflow-y-auto">
				{pathname !== '/' && (
					<NavBar
						onSearch={onSearch}
						characters={characters}
						handleLogout={handleLogout}
					/>
				)}
				<Routes>
					<Route path="*" element={<Error />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/" element={<Form login={login} />}/>
					<Route
						path="/home"
						element={<Cards characters={characters} onClose={onClose} />}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/detail/:id" element={<Detail />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
