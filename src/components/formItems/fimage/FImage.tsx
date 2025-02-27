import { FormItemImage } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import IImageUri from "../items/IImageUri";
import ITitre from "../items/ITitre";


function FImage({ name }: Readonly<ItemProps>) {
  return (
    <div>
      <ITitre<FormItemImage> name={name} />
      <IImageUri name={name} />
    </div>
  )
}

export default FImage;