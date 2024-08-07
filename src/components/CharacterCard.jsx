import "../scss/components/CharacterCard.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterCard(props) {
  return (
    <li className="list">
      <Link className="linkdetail" to={`/detail/${props.characterInfo.id}`}>
        <img
          className="list__img"
          src={props.characterInfo.image}
          alt={props.characterInfo.name}
        />
        <h4 className="list__name p">{props.characterInfo.name}</h4>
        <p className="list__specie p">{props.characterInfo.species}</p>
      </Link>
    </li>
  );
}

CharacterCard.propTypes = {
  characterInfo: PropTypes.object.isRequired,
};

export default CharacterCard;
