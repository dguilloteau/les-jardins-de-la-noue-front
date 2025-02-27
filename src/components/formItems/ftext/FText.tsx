import { ItemProps } from "../../../models/FunctionsProps";
import ITexte from "../items/ITexte";
import ITitre from "../items/ITitre";


function FText({ name }: Readonly<ItemProps>) {
  return (
    <div>
      <ITitre name={name} />
      <ITexte name={name} />
    </div>
  )
}

export default FText;