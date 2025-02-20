import { useMemo } from "react";
import { useAppContext } from "../contexts/context"
import { updateFormItemOfSelectedTypeFormulaire, addFormulaireToList } from "../contexts/dispatcher"
import { getFormItem } from "../Utils"
import { v4 as uuid } from "uuid";
import { getTypeFormulaire } from "../services/TypesFormulairesService"
import { formItem } from "./PropTypeValidation";
import PropTypes from 'prop-types';

Input.propTypes = {
  idTypeForm: PropTypes.string,
  formItem
};

function Input({ idTypeForm, formItem }) {
  const { dispatch } = useAppContext();

  const handleOnChange = e => {
    e.preventDefault();
    formItem.titre = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    if (isValid) {
      getTypeFormulaire(idTypeForm)
        .then(typeFormulaire => addFormulaireToList(dispatch, {
          formId: uuid(),
          typeFormulaire,
          dateDerniereModif: new Date().toISOString(),
          created: false,
          done: false
        }));
    }
  }

  const isValid = useMemo(() => !!formItem.titre, [formItem.titre]);

  return (
    <form className="titre my-3" onSubmit={handleOnSubmit}>
      <label htmlFor="saisieTitre">Titre :</label>
      <input
        className="form-control"
        id="saisieTitre"
        type="text"
        value={formItem.titre}
        onChange={handleOnChange}
      />
      <button type="addFormulaireToList" className="btn btn-info">
        Ajouter
      </button>
    </form>
  )
}

function SaisieTitre() {
  const { state } = useAppContext();
  return (
    <div>
      <Input idTypeForm={state.selectedTypeFormulaire.id} formItem={getFormItem(state.selectedTypeFormulaire.formItems, "ENTETE")} />
    </div>
  );
}

export default SaisieTitre;