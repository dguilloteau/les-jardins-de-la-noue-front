import { useAppContext } from "../../../context/useAppContext";
import { FormItemImage } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";


function IImageUri({ name }: Readonly<ItemProps>) {
  const { state } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire<FormItemImage>(state.selectedTypeFormulaire, name);

  return (
    <div>
      {/* // TODO faire modification de l'image */}
      <img className="form-control my-2" src={formItem.imageUri} alt="new" />
    </div>
  )
}

export default IImageUri;