import "../scss/components/Filters.scss";
import PropTypes from "prop-types";

function Filters(props) {
  function handleChange(event) {
    props.onChangeInput(event.target.value);
  }

  function handleChangeSpecie(event) {
    props.onChangeSpecie(event.target.value);
  }
  return (
    <form className="form">
      <label htmlFor="name">
        <input
          id="name"
          value={props.input}
          className="form__input placeholder"
          type="text"
          onChange={handleChange}
          placeholder="Name..."
        />
      </label>
      <label htmlFor="species">
        <input
          value={props.specie}
          type="text"
          className="form__input placeholder"
          placeholder="Specie..."
          onChange={handleChangeSpecie}
        />
      </label>
    </form>
  );
}

Filters.propTypes = {
  input: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
  specie: PropTypes.string,
  onChangeSpecie: PropTypes.func.isRequired,
};

export default Filters;
