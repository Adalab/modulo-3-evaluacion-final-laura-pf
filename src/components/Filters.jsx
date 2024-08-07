import "../scss/components/Filters.scss";

function Filters(props) {
  function handleChange(event) {
    props.onChangeInput(event.target.value);
  }
  //     Cuando la usuaria escribe el nombre en el filtro
  //  Recojo el valor
  //  Filtro con ese valor
  //  Pinto las personas filtradas
  return (
    <form className="form">
      <input className="form__input" type="text" onChange={handleChange} />
    </form>
  );
}

export default Filters;
