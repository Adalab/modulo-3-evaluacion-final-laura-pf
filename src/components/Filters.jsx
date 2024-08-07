import "../scss/components/Filters.scss";
import PropTypes from "prop-types";

function Filters(props) {
  function handleChange(event) {
    props.onChangeInput(event.target.value);
  }

  return (
    <form className="form">
      <input
        value={props.input}
        className="form__input placeholder"
        type="text"
        onChange={handleChange}
        placeholder="Name..."
      />
    </form>
  );
}

Filters.propTypes = {
  input: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
};

export default Filters;
