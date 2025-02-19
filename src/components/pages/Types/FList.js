import { useAppContext } from "../../../contexts/context"
import QuitToRootPath from "../../buttons/QuitToRootPass";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../contexts/dispatcher";
import { formItem } from "../../PropTypeValidation";

FList.propTypes = {
  formItem
};

function triListe(a, b) {
  return a.id - b.id;
}

function FList({ formItem }) {
  const { dispatch } = useAppContext();

  const handleOnChangeTitre = e => {
    e.preventDefault();
    formItem.titre = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  const handleOnSelect = e => {
    e.preventDefault();
    formItem.type = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  const handleOnChangeLibelle = e => {
    e.preventDefault();
    const id = parseInt(e.target.id);
    const libelleChoix = e.target.value;

    formItem.listeChoix = formItem.listeChoix.map((choix) => {
      return choix.id === id
        ? { ...choix, libelleChoix }
        : choix
    });
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  return (
    <div>
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
      <div>
        <form className="type my-3">
          <label htmlFor="typeChoix">Type :</label>
          <select
            className="form-select"
            id="typeChoix"
            value={formItem.type}
            onChange={handleOnSelect}>
            <option value={"RADIO"} key={"RADIO"}>RADIO</option>
            <option value={"CHECKBOX"} key={"CHECKBOX"}>CHECKBOX</option>
          </select>
        </form>
      </div>
      <div>
        {formItem.listeChoix.sort(triListe).map((choix) => (
          <form className="titre my-3" htmlFor={choix.id} key={choix.id}>
            <input
              className="form-control"
              id={choix.id}
              type="text"
              value={choix.libelleChoix}
              onChange={handleOnChangeLibelle}
            />
          </form>
        ))}
      </div>
      <QuitToRootPath />
    </div>
  )
}

export default FList;