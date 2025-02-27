import { FormItemText } from "../models/DtoStructures";
import ITitre from "./formItems/items/ITitre";


function SaisieTitre() {
  return (
    <div>
      <ITitre<FormItemText> name={"ENTETE"} />
    </div>
  );
}

export default SaisieTitre;