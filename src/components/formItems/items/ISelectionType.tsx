import { ChangeEvent } from "react";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../context/dispatcher";
import { useAppContext } from "../../../context/useAppContext";
import { FormItemList } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";


const ISelectionType = ({ name }: Readonly<ItemProps>) => {
  const { state, dispatch } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire<FormItemList>(state.selectedTypeFormulaire, name);

  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    formItem.type = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  return (
    <div>
      <form className="type my-2">
        <label htmlFor="typeChoix">Type :</label>
        <select
          className="form-select"
          id="typeChoix"
          onChange={handleOnSelect}
          value={formItem.type}>
          <option key="RADIO" value="RADIO">RADIO</option>
          <option key="CHECKBOX" value="CHECKBOX">CHECKBOX</option>
        </select>
      </form>
    </div>
  );
};

export default ISelectionType;