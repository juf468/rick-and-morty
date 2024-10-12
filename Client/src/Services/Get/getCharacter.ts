import { AxiosResponse } from 'axios';
import api from '../Axios' ; 

export const getCharacterById = async (id: string): Promise<AxiosResponse<any>> => {
    const { data } = await api.get<any>(`/rickandmorty/character/${id}`);
    return data; 
};
