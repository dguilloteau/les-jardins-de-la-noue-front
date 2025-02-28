import { FormItemList } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import ILibelleChoix from "../items/ILibelleChoix";
import ISelectionType from "../items/ISelectionType";
import ITitre from "../items/ITitre";


const FList = ({ name }: Readonly<ItemProps>) => {
  return (
    <div>
      <ITitre<FormItemList> name={name} />
      <ISelectionType name={name} />
      <ILibelleChoix name={name} />
    </div>
  );
};

export default FList;