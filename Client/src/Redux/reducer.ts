import {
    ADD_FAVORITE,
    FILTER_FAVORITES,
    ORDER_FAVORITES,
    REMOVE_FAVORITE,
    RESET,
} from './actions';

// Definición de la interfaz para los personajes
interface Character {
    id: number;
    gender: string;
    // Agrega más propiedades según sea necesario
}

// Definición de la interfaz para el estado
interface State {
    myFavorites: Character[];
    allCharacters: Character[];
}

// Definición de la interfaz para la acción
interface Action {
    type: string;
    payload: any; // Cambia "any" por el tipo específico de "payload" si lo conoces
}

const initialState: State = {
    myFavorites: [],
    allCharacters: [], // no se toca, solo add y remove
};

const rootReducer = (state: State = initialState, action: Action): State => {
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

        case ORDER_FAVORITES:
            const favoritosOrdenados = [...state.allCharacters].sort((a, b) => {
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