import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import { filterFavorites, orderFavorites, reset } from '../../Redux/actions';
import { useState } from 'react';
import Style from './Favourites.module.css';

const Favorites = () => {
	const favorites = useSelector((state) => state.myFavorites);

	const [aux, setAux] = useState(false);

	const dispatch = useDispatch();

	const handleOrder = (e) => {
		e.preventDefault();
		setAux(!aux);
		const { value } = e.target;

		dispatch(orderFavorites(value));
	};
	const handleFilter = (e) => {
		e.preventDefault();
		const { value } = e.target;

		dispatch(filterFavorites(value));
	};
	const resetButton = () => {
		dispatch(reset());
	};

	return (
		<div className={Style.container}>
			<div className={Style.selectContainer}>
				<select
					onChange={handleOrder}
					name="order"
					defaultValue={'DEFAULT'}
					className={Style.select}
				>
					<option value="DEFAULT" disabled>
						Select Order
					</option>
					<option value="Ascendente">Ascendente</option>
					<option value="Descendente">Descendente</option>
				</select>
				<select
					onChange={handleFilter}
					name="filter"
					defaultValue={'DEFAULT'}
					className={Style.select}
				>
					<option value="DEFAULT" disabled>
						Select filter
					</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknow">unknow</option>
				</select>

				<button onClick={resetButton} className={Style.button}>
					RESET
				</button>
			</div>
			<div className={Style.cardsContainer}>
				{favorites.map(
					({ id, name, species, gender, origin, status, image }) => (
						<Card
							id={id}
							key={id}
							name={name}
							species={species}
							gender={gender}
							origin={origin.name}
							status={status}
							image={image}
						/>
					)
				)}
			</div>
		</div>
	);
};
export default Favorites;
