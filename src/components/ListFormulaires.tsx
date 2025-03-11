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
    <li className="list-group-item" style={{ display: "flex", gap: "10px" }}>
      {formulaire.created ? <Link className="btn btn-info" state={formulaire.formId} to="mailViewer" type="button">Visualiser</Link> : null}
      {!formulaire.done ? <CreerModifierButton formulaire={formulaire} /> : null}
      <label className="label" style={{ left: "10px" }} >{(getFormItemOfFormulaire<FormItemText>(formulaire, "ENTETE")).titre}</label>
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