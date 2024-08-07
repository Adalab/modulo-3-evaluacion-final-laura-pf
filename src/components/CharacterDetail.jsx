import { Link } from "react-router-dom";
import "../scss/components/CharacterDetail.scss";
import PropTypes from "prop-types";

function CharacterDetail(props) {
  if (!props.character) {
    return (
      <div className="character-not-found">
        <h3 className="message">El personaje que buscas no existe</h3>
        <Link className="container-link__link p" to="/">
          &lt; Volver al inicio
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="detail">
        <div className="container-link">
          <Link className="container-link__link p" to="/">
            &lt; Volver al inicio
          </Link>
        </div>
        <article className="container-detail">
          <figure className="container-detail__contimg">
            <img
              className="container-detail__contimg-img"
              src={props.character.image}
              alt={props.character.name}
            />
          </figure>

          <section className="container-detail__info">
            <h4 className=" p">{props.character.name}</h4>
            <p className=" p">
              Status: {props.character.status}{" "}
              {props.character.status === "Dead" && (
                <span role="img" aria-label="skull">
                  💀
                </span>
              )}
            </p>
            <p className=" p">Species: {props.character.species}</p>
            <p className=" p">Origin: {props.character.origin}</p>
            <p className="container-detail__info-episodes p">
              Episodes:{props.character.episode}
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
CharacterDetail.propTypes = {
  character: PropTypes.object,
};
export default CharacterDetail;
