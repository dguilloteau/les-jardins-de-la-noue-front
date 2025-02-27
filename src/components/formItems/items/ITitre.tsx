import { ChangeEvent } from "react";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../context/dispatcher";
import { useAppContext } from "../../../context/useAppContext";
import { FormItemText } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";


function ITitre({ name }: Readonly<ItemProps>) {
  const { state, dispatch } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire(state.selectedTypeFormulaire, name) as FormItemText;

  const handleOnChangeTitre = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    formItem.titre = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  return (
    <div>
      {formItem.titre != null &&
        <form className="titre my-3">
          <label htmlFor="saisieTitreItem">Titre :</label>
          <input
            className="my-3 form-control"
            id="saisieTitreItem"
            type="text"
            value={formItem.titre}
            onChange={handleOnChangeTitre}
            autoFocus={true}
          />
        </form>
      }
    </div>
  )
}

export default ITitre;