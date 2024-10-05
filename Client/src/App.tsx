import About from "./components/About/About.tsx";
import Cards from "./components/cards/Cards.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail.tsx";
import Form from "./components/Form/Form.tsx";
import Error from "./components/Error 404/Error.tsx";
import Favorites from "./components/ Favorites/Favorites.tsx";
import imgbg from "./assets/background.jpeg";
import { getCharacterById } from "./Services/Get/getCharacter.ts";
import { loginUser } from "./Services/Get/getUser.ts";
import { Character, UserDataApp  } from "./models/interface.ts"

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState<boolean>(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access, navigate]);

  const onSearch = async (id: string | number) => {
    try {
      const stringId = String(id);
      const response = await getCharacterById(stringId);
      const data = response.data;

      if (data.name) {
        const characterRep = characters.find((char) => char.id === data.id);
        if (characterRep) {
          return alert("Personaje repetido");
        }
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id: number) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = async (userData: UserDataApp) => {
    try {
      const { username, password } = userData;
      const data = await loginUser(username, password);

      setAccess(data.access);

      if (data.access) {
        navigate("/home");
      }
    } catch (error) {
      console.log("Error en la solicitud: ", error);
    }
  };

  const handleLogout = () => {
    setAccess(false);
    setCharacters([]);
  };

  return (
    <div className="text-center h-screen">
      <img
        src={imgbg}
        alt="fondo"
        className="-z-10 fixed top-0 left-0 w-full h-full object-cover"
      />

      <div className="flex flex-col h-full w-full items-center justify-center overflow-y-auto">
        {pathname !== "/" && (
          <NavBar
            onSearch={onSearch}
            characters={characters}
            handleLogout={handleLogout}
          />
        )}
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;