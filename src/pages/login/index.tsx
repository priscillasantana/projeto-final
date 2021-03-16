import { useRef } from "react";
import { loadUserRequest } from "../../store/ducks/usuarios/action";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./style.scss";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const logged = useSelector(
    (state: any) => state.reducerUser.user.accessToken
  );

  const dispatch = useDispatch();

  const login = (data: any) => {
    dispatch(loadUserRequest(data));
  };

  return (
    <div className="center-content">
      <div className="form-login">
        <div className="bg-fundo"></div>
        <h1 className="login-title">Painel administrativo</h1>
        <form onSubmit={handleSubmit(login)}>
          {errors.email && <p className="erro">Verifique seu e-mail.</p>}
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            ref={register({
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
          />
          {errors.password && <p className="erro">Verifique sua senha.</p>}
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            ref={register({ required: true, min: 6 })}
          />

          <button className="btn btn-login" onClick={login}>
            Entrar
          </button>
        </form>

        {logged && <Redirect to="/home" />}
      </div>
    </div>
  );
};

export default Login;
