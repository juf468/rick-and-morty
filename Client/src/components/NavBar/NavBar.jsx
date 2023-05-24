//contendra toda la searchbar
import { Link } from 'react-router-dom';
import SearchBar from '../search-bar/SearchBar';
import Style from './NavBar.module.css';
import React from 'react';

const NavBar = (props) => {
	const handleRandom = () => {
		const min = 1;
		const max = 826;

		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		const characterRep = props.characters.find(
			(char) => char.id === Number(randomNumber)
		);

		if (characterRep) {
			return handleRandom();
		}
		props.onSearch(randomNumber);
	};

	return (
		<div className={Style.nav}>
			<div className={Style.linksContainer}>
				<div className={Style.navigationContainer}>
					<Link to="/about" className={Style.navigationButton}>
						About
					</Link>
					<Link to="/home" className={Style.navigationButton}>
						Home
					</Link>
					<button
						onClick={() => props.handleLogout()}
						className={Style.navigationButton}
					>
						Logout
					</button>
				</div>
				<SearchBar onSearch={props.onSearch} />
				<div className={Style.navigationContainer}>
					<button onClick={() => handleRandom()} className={Style.buttons}>
						Random
					</button>
					<Link to="/favorites" className={Style.buttons}>
						Favorites
					</Link>
				</div>
			</div>
		</div>
	);
};
export default NavBar;
