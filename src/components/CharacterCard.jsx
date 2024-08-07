import "../scss/components/CharacterCard.scss";

function CharacterCard(props) {
  return (
    <li className="list">
      <img
        className="list__img"
        src={props.characterInfo.image}
        alt={props.characterInfo.name}
      />
      <h4 className="list__name p">{props.characterInfo.name}</h4>
      <p className="list__specie p">{props.characterInfo.species}</p>
    </li>
  );
}

export default CharacterCard;
