import { Link } from "react-router-dom";
import { useAppContext } from "../context/useAppContext";
import { FormItemText, Formulaire } from "../models/DtoStructures";
import { getFormItemOfFormulaire, triListeRecentVersAncien } from "../utils/Utils";
import CreerModifierButton from "./buttons/CreerModifierButton";


type Props = {
  formulaire: Formulaire;
};

const Item = ({ formulaire }: Readonly<Props>) => {
  return (
    <li className="list-group-item">
      {formulaire.created ? <Link className="btn btn-info my-2" state={formulaire.formId} to="mailViewer" type="button">Visualiser</Link> : null}
      {!formulaire.done ? <CreerModifierButton formulaire={formulaire} /> : null}
      <span className="mx-3" >{(getFormItemOfFormulaire<FormItemText>(formulaire, "ENTETE")).titre}</span>
    </li>
  );
};

const ListFormulaires = () => {
  const { state } = useAppContext();
  return (
    <ul className="list-group">
      {state.lignesAffichees && state.lignesAffichees.length > 0 ? state.lignesAffichees.toSorted(triListeRecentVersAncien).reverse().map((formulaire) => (
        <Item formulaire={formulaire} key={formulaire.formId} />
      )) : null}
    </ul>
  );
};

export default ListFormulaires;