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
				myFavorites: [...state.myFavorites, action.payload],
				allCharacters: [...state.myFavorites, action.payload],
			};

		case REMOVE_FAVORITE:
			const newFavorites = state.allCharacters.filter(
				(char) => char.id !== action.payload // cree esta constante al necesitar de esta funcion filter para allcaracters tmb asi simplemete remplace el myFavorites.filter
				//x allCaracters.filter (ya que este contiene a myFavorites tmb) y simplemente le agregro esa prop al obj del return
			);
			return {
				...state,
				myFavorites: newFavorites,
				allCharacters: newFavorites,
			};

		case FILTER_FAVORITES:
			const filtradosGenero = state.allCharacters.filter(
				(char) => char.gender === action.payload
			);
			return {
				...state,
				myFavorites: filtradosGenero, //se lo indico a myFavorite xq es lo que se ve en pantalla, allcaracter es la lista completa que no esta en pantalla
				//me gusta esto de poner constantes con las f arriba y no hacer choclaso en el obj del estado
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
