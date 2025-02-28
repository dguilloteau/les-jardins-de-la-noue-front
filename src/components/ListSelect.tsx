import { updateListSelectOption } from "../context/dispatcher";
import { useAppContext } from "../context/useAppContext";


const ListSelect = () => {
  const { state, dispatch } = useAppContext();
  const handleOnSelect = (e: { target: { value: string; }; }) => updateListSelectOption(dispatch, e.target.value);

  return (
    <div className="type my-3">
      <select className="form-select" onChange={handleOnSelect}>
        {state.options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
};

export default ListSelect;