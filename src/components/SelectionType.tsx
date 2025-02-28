import { ChangeEvent } from "react";
import { updateSelectedTypeFormulaire } from "../context/dispatcher";
import { useAppContext } from "../context/useAppContext";
import { getTypeFormulaire } from "../services/TypesFormulairesService";


const SelectionType = () => {
  const { state, dispatch } = useAppContext();

  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    getTypeFormulaire(parseInt(e.target.value))
      .then(typeFormulaire => updateSelectedTypeFormulaire(dispatch, typeFormulaire));
  };

  return (
    <div className="type my-2">
      <label htmlFor="typesFormulaires">Type :</label>
      <select
        className="form-select"
        id="typesFormulaires"
        onChange={handleOnSelect}
        value={state.selectedTypeFormulaire.id}>
        {state.typesFormulaires.map(typeFormulaire => <option key={typeFormulaire.id} value={typeFormulaire.id}>{typeFormulaire.type}</option>)}
      </select>
    </div>
  );
};

export default SelectionType;