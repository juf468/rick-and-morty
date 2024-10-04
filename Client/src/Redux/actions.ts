import axios from 'axios';
import { Dispatch } from 'redux';

// Definición de tipos para los personajes
export interface Character {
    id: number;
    name: string;
    gender: string;
    // Añade otros campos según la estructura del personaje
}

// Tipos de acciones
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER_FAVORITES = 'FILTER_FAVORITES';
export const ORDER_FAVORITES = 'ORDER_FAVORITES';
export const RESET = 'RESET';

// Tipos de las acciones
interface AddFavoriteAction {
    type: typeof ADD_FAVORITE;
    payload: Character;
}

interface RemoveFavoriteAction {
    type: typeof REMOVE_FAVORITE;
    payload: Character;
}

interface FilterFavoritesAction {
    type: typeof FILTER_FAVORITES;
    payload: string; // O el tipo adecuado para gender
}

interface OrderFavoritesAction {
    type: typeof ORDER_FAVORITES;
    payload: 'A' | 'D'; // Ascendente o descendente
}

interface ResetAction {
    type: typeof RESET;
}

// Tipo de acción en general
type FavoriteActionTypes = 
    | AddFavoriteAction
    | RemoveFavoriteAction
    | FilterFavoritesAction
    | OrderFavoritesAction
    | ResetAction;

// Función para añadir un favorito
export const addFavorite = (character: Character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch: Dispatch<FavoriteActionTypes>) => {
        try {
            const { data } = await axios.post(endpoint, character);
            return dispatch({
                type: ADD_FAVORITE,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

// Función para eliminar un favorito
export const removeFav = (id: number) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch: Dispatch<FavoriteActionTypes>) => {
        try {
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAVORITE,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

// Función para filtrar favoritos
export const filterFavorites = (gender: string): FilterFavoritesAction => {
    return {
        type: FILTER_FAVORITES,
        payload: gender,
    };
};

// Función para ordenar favoritos
export const orderFavorites = (order: 'A' | 'D'): OrderFavoritesAction => {
    return {
        type: ORDER_FAVORITES,
        payload: order,
    };
};

// Función para reiniciar
export const reset = (): ResetAction => {
    return {
        type: RESET,
    };
};