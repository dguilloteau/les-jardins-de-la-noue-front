import { Link } from "react-router-dom";


function QuitToRootPath() {
  return (
    <div>
      <Link className="btn btn-info my-2" to="/" type={"button"}>Quitter</Link>
    </div>
  )
}

export default QuitToRootPath;