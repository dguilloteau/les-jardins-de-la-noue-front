import { useAppContext } from "../../../contexts/context"
import QuitToRootPath from "../../buttons/QuitToRootPass";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../contexts/dispatcher";
import { formItem } from "../../PropTypeValidation";

FQuestion.propTypes = {
  formItem
};

function FQuestion({ formItem }) {
  const { dispatch } = useAppContext();

  const handleOnChangeTitre = e => {
    e.preventDefault();
    formItem.titre = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  return (
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
      <QuitToRootPath />
    </div>
  )
}

export default FQuestion;