import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as UserActions from "../../store/ducks/usuarios/action";
import Sidebar from "../../components/sidebar";
import { Redirect } from "react-router";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import "./style.scss";
import Trash from "../../components/trashButton";

const User = () => {
  const user = useSelector((state: any) => state.reducerUser.user);

  const userRole = localStorage.getItem("userRole");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.getUserRequest());
  }, [dispatch]);

  const deleteUser = (id: any) => {
    try {
      dispatch(UserActions.deleteUserRequest(id));
    } catch (e) {
      console.log(e);
    }
    dispatch(UserActions.getUserRequest());
  };

  return (
    <div>
      {userRole !== "admin" && <Redirect to="/home" />}
      <Sidebar />
      <div className="container-user">
        <div className="header">
          <h1>Usuários</h1>
          <a href="/newuser">
            <BsFillPersonPlusFill size="2em" />
            <br />
            Adicionar usuário
          </a>
        </div>
        <div className="grid-user">
          {user?.map((user: any) => (
            <div key={user.id} className="user">
              <FaRegUserCircle size="4em" />
              <h2>Nome: {user.name}</h2>
              <h2>Função: {user.role}</h2>
              <div className="trash">
                <button onClick={() => deleteUser(user.id)} className="trash">
                  <Trash />
                </button>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
