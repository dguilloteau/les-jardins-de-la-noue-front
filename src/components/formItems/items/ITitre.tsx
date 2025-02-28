import { ChangeEvent } from "react";
import { updateFormItemOfSelectedTypeFormulaire } from "../../../context/dispatcher";
import { useAppContext } from "../../../context/useAppContext";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";

type Props = {
  name: string;
}

const ITitre = <T extends { titre?: string }>({ name }: Readonly<Props>) => {
  const { state, dispatch } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire<T>(state.selectedTypeFormulaire, name);

  const handleOnChangeTitre = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    formItem.titre = e.target.value;
    updateFormItemOfSelectedTypeFormulaire(dispatch, formItem);
  };

  return (
    <div>
      {formItem.titre != null ? <form className="titre my-2">
          <label htmlFor="saisieTitreItem">Titre :</label>
          <input
            autoFocus={true}
            className="form-control"
            id="saisieTitreItem"
            onChange={handleOnChangeTitre}
            type="text"
            value={formItem.titre}
          />
        </form> : null
      }
    </div>
  );
};

export default ITitre;