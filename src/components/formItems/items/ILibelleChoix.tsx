import { ChangeEvent } from "react";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../context/dispatcher";
import { useAppContext } from "../../../context/useAppContext";
import { FormItemList } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire, triAscById } from "../../../utils/Utils";


function ILibelleChoix({ name }: Readonly<ItemProps>) {
  const { state, dispatch } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire<FormItemList>(state.selectedTypeFormulaire, name);

  const handleOnChangeLibelle = (e: ChangeEvent<HTMLInputElement>) => {
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
      {formItem.listeChoix.toSorted(triAscById).map((choix) => (
        <form className="titre my-3" key={choix.id}>
          <input
            className="form-control"
            id={choix.id.toString()}
            type="text"
            value={choix.libelleChoix}
            onChange={handleOnChangeLibelle}
          />
        </form>
      ))}
    </div>
  )
}

export default ILibelleChoix;