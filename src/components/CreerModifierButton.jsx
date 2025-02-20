import { useAppContext } from "../contexts/context"
import { creerFormulaire } from "../contexts/dispatcher"
import { formulaire } from "./PropTypeValidation"

CreerModifierButton.propTypes = {
  formulaire
};

function CreerModifierButton({ formulaire }) {
  const { dispatch } = useAppContext();
  let libelle;
  let handleOnClick;
  let type;

  if (formulaire.created) {
    libelle = "Modifier";
    type = "submitModifierFormulaire";
    handleOnClick = e => dispatch({ type, payload: "submitModifierFormulaire" });
  } else {
    libelle = "Créer";
    handleOnClick = e => {
      creerFormulaire(dispatch, formulaire);
    };
  }

  return (
    <button type={type} className="btn btn-info" onClick={handleOnClick}>
      {libelle}
    </button>
  )
}

export default CreerModifierButton;