import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import { filterFavorites, orderFavorites, reset } from '../../Redux/actions';
import { useState } from 'react';

const Favorites = () => {
	const favorites = useSelector((state) => state.myFavorites);
	const [aux, setAux] = useState(false);
	const dispatch = useDispatch();

	const handleOrder = (event) => {
		event.preventDefault();
		setAux(!aux);
		const { value } = event.target;

		dispatch(orderFavorites(value));
	};

	const handleFilter = (event) => {
		event.preventDefault();
		const { value } = event.target;

		dispatch(filterFavorites(value));
	};

	const resetButton = () => {
		dispatch(reset());
	};

	return (
		<div className="flex flex-col items-center justify-center bg-transparent w-full absolute top-40">
			<div className="flex justify-center mt-10 flex-row mx-auto space-x-4">
				<select
					onChange={handleOrder}
					name="order"
					defaultValue={'DEFAULT'}
					className='cursor-pointer text-xl font-bold bg-colorButtonLogin text-black border-4 border-solid border-black text-md rounded-xl p-6 focus:outline-none'
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
					className='cursor-pointer text-xl font-bold bg-colorButtonLogin text-black border-4 border-solid border-black text-md rounded-xl p-6 focus:outline-none'
				>
					<option value="DEFAULT" disabled>
						Select filter
					</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknow">unknow</option>
				</select>

				<button
					onClick={resetButton}
					className='min-w-[20] p-6 border-solid border-colorBorderForm border-4 rounded-xl text-white bg-transparent font-bold text-xl cursor-pointer hover:border-white transition-transform ease-in-out duration-200'
				>
					RESET
				</button>
			</div>

			<div className='flex flex-wrap justify-center items-center w-full mt-8'>
				{favorites?.map(
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
