// --------- APP ---------
export interface Character {
	id: number;
	name: string;
}

export interface UserDataApp {
	username: string;
	password: string;
}

// --------- CARD -----------
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

// ---------- FAVORITE -----------
export interface Favorite {
    id: number;
    name: string;
    species: string;
    gender: string;
    origin: { name: string; };
    status: string;
    image: string;
}

//----------  FORM  -----------
export interface UserData {
	username: string;
	password: string;
}

export interface Errors {
	username: string;
	password: string;
}

export interface FormProps {
	login: (userData: UserData) => void;
} 