import { useNavigate } from "react-router-dom";

function QuitToRootPath() {
  let navigate = useNavigate();
  const handleOnClickQuitter = e => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <button className="btn btn-info my-3" to="/" onClick={handleOnClickQuitter}>
      Quitter
    </button>
  )
}

export default QuitToRootPath;