import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../context/dispatcher";
import { useAppContext } from "../../../context/useAppContext";
import { FormItem } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";

function IChecked({ name }: Readonly<ItemProps>) {
  const { state, dispatch } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire<FormItem>(state.selectedTypeFormulaire, name);

  const toggleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    formItem.checked = e.target.checked;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  const isDone = formItem.checked ? "item-done form-check-input" : "form-check-input";

  return (
    <div className="checkbox">
      <input className={isDone} type="checkbox" checked={formItem.checked} onChange={toggleCheck} />
      <Link className="label" to="types" state={formItem.name} >{formItem.libelle}</Link>
    </div>
  );
}

export default IChecked;