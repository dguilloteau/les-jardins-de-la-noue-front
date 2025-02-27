import { useAppContext } from "../context/useAppContext";
import { triAscById } from "../utils/Utils";
import IChecked from "./formItems/items/IChecked";


function CheckBoxTypes() {
  const { state } = useAppContext();
  return (
    <form className="checkbox my-2">
      {state.selectedTypeFormulaire.formItems.toSorted(triAscById).map((formItem) =>
        <IChecked key={formItem.id} name={formItem.name} />
      )}
    </form>
  );
}

export default CheckBoxTypes;