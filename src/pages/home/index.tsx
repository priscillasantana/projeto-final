import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadBeerRequest } from "../../store/ducks/beers/action";
import { getUserRequest } from "../../store/ducks/usuarios/action";
import Sidebar from "../../components/sidebar";
import { FaUserAlt, FaPlus } from "react-icons/fa";
import { IoBeerSharp } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import "./style.scss";
import { AiFillHome } from "react-icons/ai";
import { Redirect } from "react-router";

const Home = () => {
  const beer = useSelector((state: any) => state.reducerBeer.beers);

  const user = useSelector((state: any) => state.reducerUser.user);

  const userRole = localStorage.getItem("userRole");

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  let beerSize = beer?.length;

  let userSize = user?.length;

  useEffect(() => {
    dispatch(getUserRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadBeerRequest());
  }, [dispatch]);

  return (
    <div>
      {!token && <Redirect to="/" />}
      <Sidebar />

      <h1 className="titulo">
        <AiFillHome />
        Home
      </h1>

      <div className="container-home">
        <div className="home-item">
          <div className="user-home">
            <a href="/products" className="linkdiv">
              <IoBeerSharp size={"4em"} />
              <h2>Total de produtos</h2>
              <h2>{beerSize}</h2>
            </a>
          </div>
          <div>
            <br />
            <a href="/newbeer">
              <FaPlus /> Cadastrar novo produto
            </a>
          </div>
        </div>

        <div className="home-item">
          {userRole === "admin" ? (
            <a href="/users">
              <FaUserAlt size={"3em"} />
              <h2>Total de usuários</h2>
              <h2>{userSize}</h2>
            </a>
          ) : (
            <div className="user-home">
              <FaUserAlt size={"3em"} />
              <h2>Total de usuários</h2>
              <h2>{userSize}</h2>
            </div>
          )}

          {userRole === "admin" && (
            <div>
              <br />
              <a href="/newuser">
                <BsFillPersonPlusFill /> Cadastrar novo usuário
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
