import { useAppContext } from "../../../context/useAppContext";
import { FormItemImage } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";


function IImageUri({ name }: Readonly<ItemProps>) {
  const { state } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire(state.selectedTypeFormulaire, name) as FormItemImage;

  return (
    <div>
      {/* // TODO faire modification de l'image */}
      <img className="my-3 form-control" src={formItem.imageUri} alt="new" />
    </div>
  )
}

export default IImageUri;