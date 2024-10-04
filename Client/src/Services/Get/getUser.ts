// authService.ts
import api from '../Axios'; 

export interface LoginResponse {
 
  token: string; 
  user: {
      id: string;
      email: string;
      // Otros campos que necesites
  };
}
export const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
 
        const { data } = await api.get<LoginResponse>(`/rickandmorty/login/?email=${username}&password=${password}`);
        return data; // Devuelve los datos recibidos
  
};
