import CreerModifierButton from "./CreerModifierButton";
import { useAppContext } from "../contexts/context"
import { getFormItemOfFormulaire } from "../Utils";
import { formulaire } from "./PropTypeValidation"

Item.propTypes = {
  formulaire
};

function triListe(a, b) {
  return new Date(a.dateDerniereModif).getTime() - new Date(b.dateDerniereModif).getTime();
}

function Item({ formulaire }) {
  return (
    <li className="list-group-item">
      {!formulaire.done && <CreerModifierButton formulaire={formulaire} />}
      <span className="mx-3" >{getFormItemOfFormulaire(formulaire, "ENTETE").titre}</span>
    </li>
  );
}

function ListFormulaires() {
  const { state } = useAppContext();
  return (
    <ul className="list-group">
      {state.lignesAffichees && state.lignesAffichees.length > 0 && state.lignesAffichees.sort(triListe).reverse().map((formulaire) => (
        <Item key={formulaire.formId} formulaire={formulaire} />
      ))}
    </ul>
  );
}

export default ListFormulaires;