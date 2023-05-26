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
	const [characters, setCharacters] = useState([]); //1- valor inicial = array vacio xq lo necesito para
	//guardar los personajes, 2-funcion loca que transforma al estado
	const { pathname } = useLocation(); //devuelve un obj con prop '/', porque use el hok?, use distrctor porque pertenecese a location

	// Ahora simularemos una base de datos donde esté guardado un email y password. De esta forma, solo si la información de usuario coincide podrá ingresar a la aplicación. Para esto:
	// En el archivo App.js crea lo siguiente:
	// Un estado local llamado "access" que se inicialice en false.
	// Una variable llamada "EMAIL", y que sea igual a tu email.
	// Una variable "PASSWORD", y que sea igual a una contraseña.

	const [access, setAccess] = useState(false); //valor inicial
	// const username = 'julia.franchi7@gmail.com';
	// const password = 'mipass123';

	const navigate = useNavigate(); // Esta función devuelve una función de navegación que se puede utilizar para cambiar la ubicación actual de la aplicación a una ruta específica.

	//Crea una función llamada "login" que reciba por parámetro "userData". Esta función tiene que preguntar si el email y password que declaraste más arriba son iguales a los que les está llegando por parámetro.
	//En caso afirmativo, el estado local access ahora será true. Importa el hook "useNavigate" de react-router-dom y haremos que nos redirija a /home si la información es correcta.***

	useEffect(() => {
		if (!access) {
			navigate('/');
		}
	}, [access, navigate]);

	// Controla que no se puedan agregar personajes repetidos que ya se muestran en pantalla.
	// const onSearch = (id) => {
	// 	const characterRep = characters.find((char) => char.id === Number(id)); //USN NUMBER XQ EL ID DE CHAR CON EL ID QUE MANDO QUE DEBE SER UN NUM

	// 	if (characterRep) {
	// 		return alert('Personaje repetido');
	// 	}

	// 	axios(`http://localhost:3001/rickandmorty/character/${id}`)
	// 		.then(({ data }) => {
	// 			if (data.name) {
	// 				setCharacters((oldChars) => [...oldChars, data]);
	// 			}
	// 		})
	// 		.catch(() => window.alert('¡No hay personajes con este ID!'));
	// };
	//------------------------------AHORA CON ASYNC!!-------------------------
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
		setCharacters(characters.filter((char) => char.id !== id)); // filter no modifica el array original entonces al estado caracters le doy el array nuevo
		// este onclose tiene que llegar a card pasando por cards
	};
	//**
	// const login = (userData) => {
	// 	if (userData.username === username && userData.password === password) {
	// 		setAccess(true); //cambio el setAccess a true
	// 		navigate('/home');
	// 	} else alert('credenciales incorrectas'); // TIRA EL ALERT CON TRUE
	// };
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
			console.log(error.message);
		}
	};
	const handleLogout = () => {
		setAccess(false);
		setCharacters([]);
	};

	return (
		<div className="App">
			<div className="blur">
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
					<Route path="/" element={<Form login={login} />} />
					<Route
						path="/home"
						element={<Cards characters={characters} onClose={onClose} />}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/detail/:detailId" element={<Detail />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
//necesito recuperar el numero del id x eso detail:detailid
// useState([characters,setCharacters])= useState ([])
// [
//      un estado => []
//    fn()=> modifica el estado
// ]
// character ([]) => agregar 'hola' dentro del array => setCharacter ([..., 'hola']) es la unica forma de agregar un string a la array
// yo quiero tener una funcion onSearch(id) 1- hace el pedido a la api con el id del personaje 2- si recibe bien la rta agrega ese personaje al estado characters que es de app
// =>> 3- si no recibe bien la rta muestra un alert --- estara creada aca en app . que pasara por nav y finalmente a searchbar dnd se ejecutara para eso la searchbar tendra en cuenta unid
// el cual modifica el estado de app, dipara eventos que modifica el estado del padre al modificarse character en app modifica tambnien las props que este envia a card y por ende a cards
