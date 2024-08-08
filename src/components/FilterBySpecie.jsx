import "../scss/components/FilterBySpecie.scss";
import PropTypes from "prop-types";

function FilterBySpecie(props) {
  function handleChangeSpecie(event) {
    props.onChangeSpecie(event.target.value);
  }

  return (
    <>
      <div className="filter-specie">
        <h4 className="specie-tittle">Especie:</h4>
        <label className="label custom-radio" htmlFor="All">
          Todas
          <input
            className="radio-input"
            id="All"
            type="radio"
            name="species"
            value=""
            checked={props.specie === ""}
            onChange={handleChangeSpecie}
          />
          <span className="radio-checkmark"></span>
        </label>

        <label className="label custom-radio" htmlFor="Human">
          Humano
          <input
            className="radio-input"
            onChange={handleChangeSpecie}
            type="radio"
            id="Human"
            value="Human"
            name="species"
            checked={props.specie === "Human"}
          />
          <span className="radio-checkmark"></span>
        </label>

        <label className="label custom-radio" htmlFor="Alien">
          Alien
          <input
            className="radio-input"
            onChange={handleChangeSpecie}
            type="radio"
            id="Alien"
            value="Alien"
            name="species"
            checked={props.specie === "Alien"}
          />
          <span className="radio-checkmark"></span>
        </label>
      </div>
    </>
  );
}
FilterBySpecie.propTypes = {
  specie: PropTypes.string,
  onChangeSpecie: PropTypes.func.isRequired,
};

export default FilterBySpecie;
