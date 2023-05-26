//paso en limpio las props que me llegan
// name especies gender imagen onClose
//no uso adeventlistener xq eso es del dom, react lo hace solo
//para el id ejecutando onclosdse (read 08)
import { Link } from 'react-router-dom';
import style from './card.module.css';
import { connect } from 'react-redux';
import { addFavorite, removeFav } from '../../Redux/actions';
import { useEffect, useState } from 'react';

function Card({
	id,
	name,
	species,
	gender,
	image,
	origin,
	status,
	onClose,
	addFavorite,
	removeFavorite,
	myFavorites,
}) {
	//prof : cons cars =({des, des, des, des})=>{
	const [isFav, setIsFav] = useState(false);

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			removeFavorite(id);
			return;
		}
		setIsFav(true);
		addFavorite({
			id,
			name,
			species,
			gender,
			image,
			origin,
			status,
		});
	};

	useEffect(() => {
		myFavorites?.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites, id]);

	const hasOnClose = typeof onClose === 'function';

	return (
		<div className={style.container}>
			<div className={style.imageContainer}>
				{isFav ? (
					<button onClick={handleFavorite} className={style.heartButton}>
						❤️
					</button>
				) : (
					<button onClick={handleFavorite} className={style.heartButton}>
						🤍
					</button>
				)}
				{hasOnClose ? (
					<button onClick={() => onClose(id)} className={style.closeButton}>
						X
					</button>
				) : null}
				<img className={style.image} src={image} alt="" />
				<Link to={`/detail/${id} `}>
					<h2 className={style.title}>{name}</h2>
				</Link>
			</div>
			<p className={style.text}>⚰️ Status: {status}</p>
			<p className={style.text}>👽️ Species: {species}</p>
			<p className={style.text}>🍑 Gender: {gender}</p>
			<p className={style.text}>🌎 Origin: {origin}</p>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addFavorite: (character) => {
			dispatch(addFavorite(character));
		},
		removeFavorite: (id) => {
			dispatch(removeFav(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
