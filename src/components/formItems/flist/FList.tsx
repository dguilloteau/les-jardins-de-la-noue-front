import { ItemProps } from "../../../models/FunctionsProps";
import ILibelleChoix from "../items/ILibelleChoix";
import ISelectionType from "../items/ISelectionType";
import ITitre from "../items/ITitre";


function FList({ name }: Readonly<ItemProps>) {
  return (
    <div>
      <ITitre name={name} />
      <ISelectionType name={name} />
      <ILibelleChoix name={name} />
    </div>
  )
}

export default FList;