import { useAppContext } from "../../../contexts/context"
import QuitToRootPath from "../../buttons/QuitToRootPass";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../contexts/dispatcher";
import { formItem } from "../../PropTypeValidation";

FText.propTypes = {
  formItem
};

function FText({ formItem }) {
  const { dispatch } = useAppContext();

  const handleOnChangeTitre = e => {
    e.preventDefault();
    formItem.titre = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  const handleOnChangeTexte = e => {
    e.preventDefault();
    formItem.texte = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  return (
    <div>
      {formItem.titre != null &&
        <div>
          <form className="titre my-3">
            <label htmlFor="saisieTitreItem">Titre :</label>
            <input
              className="my-3 form-control"
              id="saisieTitreItem"
              type="text"
              value={formItem.titre}
              onChange={handleOnChangeTitre}
            />
          </form>
        </div>
      }

      {formItem.texte != null &&
        <div>
          <form className="titre my-3">
            <textarea
              className={formItem.titre == null ? "my-3 form-control" : "form-control"}
              id="saisieTexteItem"
              value={formItem.texte}
              onChange={handleOnChangeTexte}
              rows={10}
            />
          </form>
        </div>
      }
      <QuitToRootPath />
    </div>
  )
}

export default FText;