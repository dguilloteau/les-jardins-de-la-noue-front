import { FormItemText } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import ITexte from "../items/ITexte";
import ITitre from "../items/ITitre";


const FText = ({ name }: Readonly<ItemProps>) => {
  return (
    <div>
      <ITitre<FormItemText> name={name}/>
      <ITexte name={name} />
    </div>
  );
};

export default FText;