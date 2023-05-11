export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER_FAVORITES = 'FILTER_FAVORITES';
export const OREDER_FAVORITES = 'ORDER_FAVORITES';
export const RESET = 'RESET';
// estos podrian ir en una carpeta types

export const addFavorite = (character) => {
	return {
		type: ADD_FAVORITE,
		payload: character,
	};
};

export const removeFavorite = (id) => {
	return {
		type: REMOVE_FAVORITE,
		payload: id,
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
