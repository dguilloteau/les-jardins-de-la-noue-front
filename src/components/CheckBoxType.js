import { useAppContext } from "../contexts/context"
import { updateFormItemOfSelectedTypeFormulaire } from "../contexts/dispatcher"
import { Link } from "react-router";
import PropTypes from 'prop-types';
import { formItem } from "../components/PropTypeValidation";

Item.propTypes = {
  idTypeForm: PropTypes.string,
  formItem
};

function triListe(a, b) {
  return a.id - b.id;
}

function Item({ formItem }) {
  const { dispatch } = useAppContext();
  const toggleCheck = e => {
    formItem.checked = e.target.checked;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  const isDone = formItem.checked ? "item-done form-check-input" : "form-check-input";

  return (
    <div className="checkbox">
      <input className={isDone} type="checkbox" checked={formItem.checked} onChange={toggleCheck} id={formItem.id} />
      <Link className="label" htmlFor={formItem.id} to={"types"} state={{ formItem }} >{formItem.libelle}</Link>
    </div>
  );
}

function CheckBoxTypes() {
  const { state } = useAppContext();
  return (
    <form className="checkbox my-3">
      {state.selectedTypeFormulaire.formItems.sort(triListe).map((formItem) =>
        <Item key={formItem.id} formItem={formItem} />
      )}
    </form>
  );
}

export default CheckBoxTypes;