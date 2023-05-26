import axios from 'axios';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER_FAVORITES = 'FILTER_FAVORITES';
export const OREDER_FAVORITES = 'ORDER_FAVORITES';
export const RESET = 'RESET';

// estos podrian ir en una carpeta types

// 	return {
// 		type: ADD_FAVORITE,
// 		payload: character,
// 	};
// };
// export const addFav = (character) => {
//---------con propio server----
// export const addFavorite = (character) => {
// 	const endpoint = 'http://localhost:3001/rickandmorty/fav';
// 	return (dispatch) => {
// 		axios.post(endpoint, character).then(({ data }) => {
// 			return dispatch({
// 				type: 'ADD_FAVORITE',
// 				payload: data,
// 			});
// 		});
// 	};
// };
//-------------pasado a async----------
export const addFavorite = (character) => {
	const endpoint = 'http://localhost:3001/rickandmorty/fav';
	return async (dispatch) => {
		try {
			const { data } = await axios.post(endpoint, character);
			return dispatch({
				type: 'ADD_FAVORITE',
				payload: data,
			});
		} catch (error) {
			console.log(error.message);
		}
	};
};

// export const removeFavorite = (id) => {
// 	return {
// 		type: REMOVE_FAVORITE,
// 		payload: id,
// 	};
// };
//-----------------CON MI PROPIO SERVER------------------------------
// export const removeFav = (id) => {
// 	const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
// 	return (dispatch) => {
// 		axios.delete(endpoint).then(({ data }) => {
// 			return dispatch({
// 				type: 'REMOVE_FAVORITE',
// 				payload: data,
// 			});
// 		});
// 	};
// };
//----------------CON ASYNC AWAIT----------------------------
export const removeFav = (id) => {
	const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
	return async (dispatch) => {
		try {
			const { data } = await axios.delete(endpoint);
			return dispatch({
				type: 'REMOVE_FAVORITE',
				payload: data,
			});
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const filterFavorites = (gender) => {
	return {
		type: 'FILTER_FAVORITES',
		payload: gender,
	};
};
export const orderFavorites = (order) => {
	// recibe A :ascendente o D : descendente
	return {
		type: 'ORDER_FAVORITES',
		payload: order,
	};
};
export const reset = () => {
	return {
		type: 'RESET',
	};
};
