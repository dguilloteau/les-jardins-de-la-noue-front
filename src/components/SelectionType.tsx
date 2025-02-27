import { ChangeEvent } from "react";
import { updateSelectedTypeFormulaire } from "../context/dispatcher";
import { useAppContext } from "../context/useAppContext";
import { getTypeFormulaire } from "../services/TypesFormulairesService";


function SelectionType() {
  const { state, dispatch } = useAppContext();
  
  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    getTypeFormulaire(parseInt(e.target.value))
      .then(typeFormulaire => updateSelectedTypeFormulaire(dispatch, typeFormulaire));
  };

  return (
    <div className="type my-2 mx-2">
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