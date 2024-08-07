import "../scss/components/CharacterList.scss";
import CharacterCard from "./CharacterCard";

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

export default CharacterList;
