import { Link } from "react-router-dom";
import "../scss/components/CharacterDetail.scss";

function CharacterDetail(props) {
  return (
    <div className="detail">
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
          <p className=" p">Status: {props.character.status}</p>
          <p className=" p">Species: {props.character.species}</p>
          <p className=" p">Origin: {props.character.origin}</p>
          <p className="container-detail__info-episodes p">
            Episodes:{props.character.episode}
          </p>
          <Link className="link p" to="/">
            Volver a inicio
          </Link>
        </section>
      </article>
    </div>
  );
}

export default CharacterDetail;
