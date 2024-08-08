import "../scss/components/Filters.scss";
import PropTypes from "prop-types";
import FilterBySpecie from "./FilterBySpecie";

function Filters(props) {
  function handleChange(event) {
    props.onChangeInput(event.target.value);
  }

  return (
    <form className="form">
      <input
        id="name"
        value={props.input}
        className="form__input placeholder"
        type="text"
        onChange={handleChange}
        placeholder="Name..."
        name="name"
        autoComplete="off"
      />
      <FilterBySpecie
        onChangeSpecie={props.onChangeSpecie}
        specie={props.specie}
      />
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
