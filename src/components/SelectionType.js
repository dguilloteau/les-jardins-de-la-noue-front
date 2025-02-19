import { useAppContext } from "../contexts/context"
import { getTypeFormulaire } from "../services/TypesFormulairesService"
import { updateSelectedTypeFormulaire } from "../contexts/dispatcher";

function SelectionType() {
  const { state, dispatch } = useAppContext();
  const handleOnSelect = e => {
    e.preventDefault();
    getTypeFormulaire(e.target.value)
      .then(typeFormulaire => updateSelectedTypeFormulaire(dispatch, typeFormulaire));
  };

  return (
    <div className="type my-3">
      <label htmlFor="typesFormulaires">Type :</label>
      <select
        className="form-select"
        id="typesFormulaires"
        value={state.selectedTypeFormulaire.id}
        onChange={handleOnSelect}>
        {state.typesFormulaires.map(typeFormulaire => <option value={typeFormulaire.id} key={typeFormulaire.id}>{typeFormulaire.type}</option>)}
      </select>
    </div>
  );
}

export default SelectionType;