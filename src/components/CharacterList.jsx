import "../scss/components/CharacterList.scss";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList(props) {
  const allCharacters = props.characters.map((character) => {
    return <CharacterCard key={character.id} characterInfo={character} />;
  });
  return (
    <section className="section-list">
      <ul className="container-list">{allCharacters}</ul>
    </section>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
