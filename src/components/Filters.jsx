import "../scss/components/Filters.scss";

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

export default Filters;
