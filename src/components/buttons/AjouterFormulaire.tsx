import { MouseEvent } from "react";
import { v4 as uuid } from "uuid";
import { addFormulaireToList } from "../../context/dispatcher";
import { useAppContext } from "../../context/useAppContext";
import { getTypeFormulaire } from "../../services/TypesFormulairesService";

function AjouterFormulaire() {
  const { state, dispatch } = useAppContext();

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getTypeFormulaire(state.selectedTypeFormulaire.id)
      .then(typeFormulaire => addFormulaireToList(dispatch, {
        formId: uuid(),
        typeFormulaire,
        dateDerniereModif: new Date().toISOString(),
        created: false,
        done: false
      }));
  }

  return (
    <button type="button" className="btn btn-info my-2 mx-2" onClick={handleOnClick}>Ajouter</button>
  )
}

export default AjouterFormulaire;