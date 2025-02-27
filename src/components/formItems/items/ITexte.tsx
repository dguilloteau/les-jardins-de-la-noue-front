import { ChangeEvent } from "react";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../context/dispatcher";
import { useAppContext } from "../../../context/useAppContext";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";
import { FormItemText } from "../../../models/DtoStructures";


function ITexte({ name }: Readonly<ItemProps>) {
  const { state, dispatch } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire(state.selectedTypeFormulaire, name) as FormItemText;

  const handleOnChangeTexte = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    formItem.texte = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  return (
    <div>
      {formItem.texte != null &&
        <form className="titre my-3">
          <textarea
            className={formItem.titre == null ? "my-3 form-control" : "form-control"}
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