import "../scss/App.scss";
import headerImage from "./images/rickymorty.png";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import localStorage from "../services/localStorage";

function App() {
  const [listCharacters, setListCharacter] = useState([]);
  const [inputName, setInputName] = useState(localStorage.get("input") || "");
  const [isLoading, setIsLoading] = useState(true);
  const [inputSpecie, setInputSpecie] = useState(
    localStorage.get("specie") || ""
  );

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const characterData = data.results.map((character) => {
          return {
            name: character.name,
            image: character.image,
            species: character.species,
            id: character.id,
            episode: character.episode.length,
            status: character.status,
            origin: character.origin.name,
          };
        });

        const sortedCharacterData = characterData.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });

        setListCharacter(sortedCharacterData);
        setIsLoading(false);
      });
  }, []);

  function handleChangeInput(value) {
    setInputName(value);
  }

  function handleChangeSpecie(value) {
    if (inputSpecie === value) {
      setInputSpecie("");
    } else {
      setInputSpecie(value);
    }
  }

  useEffect(() => {
    localStorage.set("input", inputName);
    localStorage.set("specie", inputSpecie);
  }, [inputName, inputSpecie]);

  const filteredCharacters = listCharacters
    .filter((character) =>
      character.name.toLowerCase().includes(inputName.toLowerCase())
    )
    .filter((character) => {
      if (inputSpecie === "") {
        return true; // Si no hay filtro, devuelve true para incluir todos los elementos
      } else {
        return character.species === inputSpecie; // Devuelve true si la especie coincide
      }
    });

  //vista detalle ruta:

  const { pathname } = useLocation();
  const routeData = matchPath("/detail/:characterId", pathname);
  const idCharacter =
    routeData !== null ? parseInt(routeData.params.characterId) : null;

  const characterSelected = listCharacters.find(
    (character) => character.id === idCharacter
  );

  return (
    <>
      <div className="container-header">
        <header className="header">
          <img
            className="header__img"
            src={headerImage}
            alt="logo Rick y Morty"
          />
        </header>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                input={inputName}
                onChangeInput={handleChangeInput}
                onChangeSpecie={handleChangeSpecie}
                specie={inputSpecie}
              />

              {isLoading ? (
                <p className="message">Loading...</p>
              ) : filteredCharacters.length > 0 ? (
                <CharacterList characters={filteredCharacters} />
              ) : (
                <p className="message">
                  No se encuentra el personaje relacionado con la búsqueda:{" "}
                  {inputName}
                </p>
              )}
            </>
          }
        />
        <Route
          path="/detail/:characterId"
          element={<CharacterDetail character={characterSelected} />}
        />
      </Routes>
    </>
  );
}

export default App;
