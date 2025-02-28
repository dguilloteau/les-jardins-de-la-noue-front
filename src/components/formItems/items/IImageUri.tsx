import { useAppContext } from "../../../context/useAppContext";
import { FormItemImage } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../../utils/Utils";


const IImageUri = ({ name }: Readonly<ItemProps>) => {
  const { state } = useAppContext();
  const formItem = getFormItemOfTypeFormulaire<FormItemImage>(state.selectedTypeFormulaire, name);

  return (
    <div>
      {/* // TODO faire modification de l'image */}
      <img alt="new" className="form-control my-2" src={formItem.imageUri} />
    </div>
  );
};

export default IImageUri;