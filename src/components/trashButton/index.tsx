import { FaTrashAlt } from "react-icons/fa";
import "./style.scss";

const Trash = () => {
  return (
    <div className="btn-trash">
      <FaTrashAlt size="2em" color="red" />
      <br />
      Remover
    </div>
  );
};

export default Trash;
