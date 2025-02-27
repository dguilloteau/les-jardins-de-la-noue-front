import { MouseEvent } from "react";
import { v4 as uuid } from "uuid";
import { addFormulaireToList } from "../context/dispatcher";
import { useAppContext } from "../context/useAppContext";
import { FormItemText } from "../models/DtoStructures";
import { getTypeFormulaire } from "../services/TypesFormulairesService";
import { getFormItemOfTypeFormulaire } from "../utils/Utils";
import ITitre from "./formItems/items/ITitre";


function SaisieTitre() {
  const { state, dispatch } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire(state.selectedTypeFormulaire, "ENTETE") as FormItemText;

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getTypeFormulaire(state.selectedTypeFormulaire.id)
      .then(typeFormulaire => addFormulaireToList(dispatch, {
        id: 0,
        formId: uuid(),
        typeFormulaire,
        dateDerniereModif: new Date().toISOString(),
        created: false,
        done: false
      }));
  }
  return (
    <div>
      <ITitre name={formItem.name} />
      <button type="button" className="btn btn-info" onClick={handleOnClick}>
        Ajouter
      </button>
    </div>
  );
}

export default SaisieTitre;