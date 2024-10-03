export interface CardProps {
	id: number;
	name: string;
	species: string;
	gender: string;
	image: string;
	origin: string;
	status: string;
	onClose?: (id: number) => void;
	addFavorite: (character: FavoriteCharacter) => void;
	removeFavorite: (id: number) => void;
	myFavorites: FavoriteCharacter[];
}

export interface FavoriteCharacter {
	id: number;
	name: string;
	species: string;
	gender: string;
	image: string;
	origin: string;
	status: string;
}