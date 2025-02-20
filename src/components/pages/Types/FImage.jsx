import { useAppContext } from "../../../contexts/context"
import QuitToRootPath from "../../buttons/QuitToRootPass";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../contexts/dispatcher";
import { formItem } from "../../PropTypeValidation";

FImage.propTypes = {
  formItem
};

function FImage({ formItem }) {
  const { dispatch } = useAppContext();

  const handleOnChangeTitre = e => {
    e.preventDefault();
    formItem.titre = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  return (
    <div>
      {formItem.titre != null &&
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
      }
      <div>
        {/* // TODO faire modification de l'image */}
        <img className="my-3 form-control" src={formItem.imageUri} alt="new" />
      </div>
      <QuitToRootPath />
    </div>
  )
}

export default FImage;