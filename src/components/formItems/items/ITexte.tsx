import { ChangeEvent } from "react";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../context/dispatcher";
import { useAppContext } from "../../../context/useAppContext";
import { FormItemText } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";


function ITexte({ name }: Readonly<ItemProps>) {
  const { state, dispatch } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire<FormItemText>(state.selectedTypeFormulaire, name);

  const handleOnChangeTexte = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    formItem.texte = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  return (
    <div>
      {formItem.texte != null &&
        <form className="titre my-2">
          <textarea
            className={formItem.titre == null ? "my-2 form-control" : "form-control"}
            id="saisieTexteItem"
            value={formItem.texte}
            onChange={handleOnChangeTexte}
            rows={10}
            autoFocus={formItem.titre == null}
          />
        </form>
      }
    </div>
  )
}

export default ITexte;