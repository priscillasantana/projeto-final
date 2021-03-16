import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../components/sidebar";
import * as BeerActions from "../../store/ducks/beers/action";
import "./style.scss";
import { Redirect } from "react-router";
import { FaPlus } from "react-icons/fa";

const Beer = () => {
  const beer = useSelector((state: any) => state.reducerBeer.beers);

  const dispatch = useDispatch();

  const userRole = localStorage.getItem("userRole");

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(BeerActions.loadBeerRequest());
  }, [dispatch]);

  const deleteBeer = (id: any) => {
    try {
      dispatch(BeerActions.deleteBeerRequest(id));
    } catch (e) {
      console.log(e);
    }
    dispatch(BeerActions.loadBeerRequest());
  };

  return (
    <div>
      {!token && <Redirect to="/" />}
      <Sidebar />
      <div className="container-produtos">
        <div className="header">
          <h1>Produtos</h1>
          <a href="/newbeer">
            <FaPlus size="2em" />
            <br />
            Novo produto
          </a>
        </div>
        <div className="grid">
          {beer?.map((beer: any) => (
            <div key={beer.id} className="products">
              <h3>{beer.title}</h3>

              <img src={beer.image} alt={beer.description} className="beers" />

              <p className="price">{beer.price}</p>

              {userRole === "admin" && (
                <button onClick={() => deleteBeer(beer.id)} className="btn">
                  Remover
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beer;
