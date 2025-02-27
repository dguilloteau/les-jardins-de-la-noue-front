import { useAppContext } from "../context/useAppContext";
import { FormItemText, Formulaire } from "../models/DtoStructures";
import { getFormItemOfFormulaire, triListeRecentVersAncien } from "../utils/Utils";
import CreerModifierButton from "./buttons/CreerModifierButton";


type Props = {
  formulaire: Formulaire;
};

function Item({ formulaire }: Readonly<Props>) {
  return (
    <li className="list-group-item">
      {!formulaire.done && <CreerModifierButton formulaire={formulaire} />}
      <span className="mx-3" >{(getFormItemOfFormulaire<FormItemText>(formulaire, "ENTETE")).titre}</span>
    </li>
  );
}

function ListFormulaires() {
  const { state } = useAppContext();
  return (
    <ul className="list-group">
      {state.lignesAffichees && state.lignesAffichees.length > 0 && state.lignesAffichees.toSorted(triListeRecentVersAncien).reverse().map((formulaire) => (
        <Item key={formulaire.formId} formulaire={formulaire} />
      ))}
    </ul>
  );
}

export default ListFormulaires;