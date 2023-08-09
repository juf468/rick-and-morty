import {
	ADD_FAVORITE,
	FILTER_FAVORITES,
	OREDER_FAVORITES,
	REMOVE_FAVORITE,
	RESET,
} from './actions';

const initialState = {
	myFavorites: [],
	allCharacters: [], //no se toca, solo add y remove
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return {
				...state,
				myFavorites: action.payload,
				allCharacters: action.payload,
			};

		case REMOVE_FAVORITE:
			return {
				...state,
				myFavorites: action.payload,
				allCharacters: action.payload,
			};

		case FILTER_FAVORITES:
			const filtradosGenero = state.allCharacters.filter(
				(char) => char.gender === action.payload
			);
			return {
				...state,
				myFavorites: filtradosGenero,
			};
		case RESET:
			return {
				...state,
				myFavorites: [...state.allCharacters],
			};
		case OREDER_FAVORITES:
			const favoritosOrdenados = state.allCharacters.sort((a, b) => {
				if (a.id > b.id) {
					return 'Ascendente' === action.payload ? 1 : -1;
				}
				if (a.id < b.id) {
					return 'Descendente' === action.payload ? -1 : 1;
				}
				return 0;
			});
			return {
				...state,
				myFavorites: favoritosOrdenados,
			};

		default:
			return { ...state };
	}
};
export default rootReducer;
