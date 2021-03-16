import { useDispatch } from "react-redux";
import { newBeerRequest } from "../../store/ducks/beers/action";
import Sidebar from "../../components/sidebar";
import { useForm } from "react-hook-form";
import { IoMdBeer } from "react-icons/io";
import "./style.modules.scss";
import { Redirect } from "react-router";

const Produtos = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const token = localStorage.getItem("token");

  const cadastro = (dados: any) => {
    dispatch(newBeerRequest(dados));
  };

  return (
    <div>
      {!token && <Redirect to="/" />}
      <Sidebar />

      <a href="/products" className="icon-link">
        <IoMdBeer size="2em" />
        Produtos
      </a>

      <div className="inputs-form">
        <h1>Novo produto</h1>
        <form onSubmit={handleSubmit(cadastro)}>
          {errors.title && <p className="erro">Campo obrigatório.</p>}
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Nome do produto"
            ref={register({ required: true })}
          />
          {errors.price && <p className="erro">Campo obrigatório.</p>}
          <input
            className="input"
            type="text"
            name="price"
            placeholder="Preço"
            ref={register({ required: true })}
          />
          {errors.description && <p className="erro">Campo obrigatório.</p>}
          <input
            className="input"
            type="text"
            name="description"
            placeholder="Descrição"
            ref={register({ required: true })}
          />
          {errors.image && <p className="erro">Campo obrigatório.</p>}
          <input
            className="input"
            type="url"
            name="image"
            placeholder="Url da imagem"
            ref={register({ required: true })}
          />
          <button className="btn" onClick={cadastro}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Produtos;
