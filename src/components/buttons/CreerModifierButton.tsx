
import { creerFormulaire } from "../../context/dispatcher";
import { useAppContext } from "../../context/useAppContext";
import { Formulaire } from "../../models/DtoStructures";

type Props = {
  formulaire: Formulaire;
};

const CreerModifierButton = ({ formulaire }: Readonly<Props>) => {
  const { dispatch } = useAppContext();
  let libelle;
  let handleOnClick;
  // let type: string;

  if (formulaire.created) {
    libelle = "Modifier";
    // type = "submitModifierFormulaire";
    // handleOnClick = () => dispatch({ type, payload: "submitModifierFormulaire" });
  } else {
    libelle = "Créer";
    handleOnClick = () => {
      creerFormulaire(dispatch, formulaire);
    };
  }

  return (
    <button className="btn btn-info" onClick={handleOnClick} type="button">
      {libelle}
    </button>
  );
};

export default CreerModifierButton;