// import { useRef } from "react";
import { newUserRequest } from "../../store/ducks/usuarios/action";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/sidebar";
import { Redirect } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import "./style.scss";

const Cadastrar = () => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const userRole = localStorage.getItem("userRole");

  const cadastro = (dados: any) => {
    console.log(dados);
    dispatch(newUserRequest(dados));
  };

  return (
    <div>
      {userRole !== "admin" && <Redirect to="/home" />}

      <Sidebar />

      <a href="/users" className="icon-link">
        <FaUserAlt size="1.5em" />
        Usuários
      </a>

      <div className="inputs-form">
        <h1>Novo colaborador</h1>
        <form onSubmit={handleSubmit(cadastro)}>
          {errors.email && <p className="erro">Verifique o e-mail.</p>}
          <input
            className="input"
            name="email"
            type="email"
            placeholder="E-mail"
            ref={register({ required: true })}
          />
          {errors.password && (
            <p className="erro">Mínimo de seis caracteres.</p>
          )}
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Senha inicial"
            ref={register({ required: true, minLength: 6 })}
          />
          {errors.name && <p className="erro">Verifique o nome.</p>}
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Nome"
            ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
          />
          {errors.role && <p className="erro">Selecione uma opção!</p>}
          <select
            className="radio"
            name="role"
            ref={register({ required: true })}
          >
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
          </select>

          <br />
          <br />
          <button className="btn" onClick={cadastro}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastrar;
