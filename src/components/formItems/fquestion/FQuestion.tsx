import { FormItemQuestion } from "../../../models/DtoStructures";
import { ItemProps } from "../../../models/FunctionsProps";
import ITitre from "../items/ITitre";


const FQuestion = ({ name }: Readonly<ItemProps>) => {
  return (
    <div>
      <ITitre<FormItemQuestion> name={name} />
    </div>
  );
};

export default FQuestion;