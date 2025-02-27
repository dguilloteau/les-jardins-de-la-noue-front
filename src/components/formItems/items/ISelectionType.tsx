import { ChangeEvent } from "react";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../context/dispatcher";
import { useAppContext } from "../../../context/useAppContext";
import { FormItemList } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";


function ISelectionType({ name }: Readonly<ItemProps>) {
  const { state, dispatch } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire<FormItemList>(state.selectedTypeFormulaire, name);

  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    formItem.type = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  return (
    <div>
      <form className="type my-3">
        <label htmlFor="typeChoix">Type :</label>
        <select
          className="form-select"
          id="typeChoix"
          value={formItem.type}
          onChange={handleOnSelect}>
          <option value={"RADIO"} key={"RADIO"}>RADIO</option>
          <option value={"CHECKBOX"} key={"CHECKBOX"}>CHECKBOX</option>
        </select>
      </form>
    </div>
  )
}

export default ISelectionType;