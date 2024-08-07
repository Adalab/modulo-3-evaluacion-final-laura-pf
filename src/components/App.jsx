import "../scss/App.scss";
import headerImage from "./images/rickymorty.png";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

function App() {
  const [listCharacters, setListCharacter] = useState([]);
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
    )
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

        setListCharacter(characterData);
      });
  }, []);

  function handleChangeInput(value) {
    setInputName(value);
  }

  const filteredCharacters = listCharacters.filter((character) =>
    character.name.toLowerCase().includes(inputName.toLocaleLowerCase())
  );

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
      <header className="header">
        <img
          className="header__img"
          src={headerImage}
          alt="logo Rick y Morty"
        />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters onChangeInput={handleChangeInput} />

              <CharacterList characters={filteredCharacters} />
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
