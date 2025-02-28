import { MouseEvent } from "react";
import { v4 as uuid } from "uuid";
import { addFormulaireToList } from "../../context/dispatcher";
import { useAppContext } from "../../context/useAppContext";
import { getTypeFormulaire } from "../../services/TypesFormulairesService";

const AjouterFormulaire = () => {
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
  };

  return (
    <button className="btn btn-info my-2" onClick={handleOnClick} type="button">Ajouter</button>
  );
};

export default AjouterFormulaire;