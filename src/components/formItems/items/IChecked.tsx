import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../context/dispatcher";
import { useAppContext } from "../../../context/useAppContext";
import { FormItem } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";

const IChecked = ({ name }: Readonly<ItemProps>) => {
  const { state, dispatch } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire<FormItem>(state.selectedTypeFormulaire, name);

  const toggleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    formItem.checked = e.target.checked;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  const isDone = formItem.checked ? "item-done form-check-input" : "form-check-input";

  return (
    <div className="checkbox">
      <input checked={formItem.checked} className={isDone} onChange={toggleCheck} type="checkbox" />
      <Link className="label" state={formItem.name} to="types" >{formItem.libelle}</Link>
    </div>
  );
};

export default IChecked;